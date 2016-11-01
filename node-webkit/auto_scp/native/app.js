var os = require('os');
if (os.platform() == 'win32') {  
    var chilkat = require('chilkat_node6_win32'); 
} else if (os.platform() == 'linux') {
    if (os.arch() == 'arm') {
        var chilkat = require('chilkat_node6_arm');
    } else if (os.arch() == 'x86') {
        var chilkat = require('chilkat_node6_linux32');
    } else {
        var chilkat = require('chilkat_node6_linux64');
    }
} else if (os.platform() == 'darwin') {
    var chilkat = require('chilkat_node6_macosx');
}

function chilkatExample() {

    //  Important: It is helpful to send the contents of the
    //  LastErrorText property when requesting support.

    var ssh = new chilkat.Ssh();

    //  Any string automatically begins a fully-functional 30-day trial.
    var success = ssh.UnlockComponent("30-day trial");
    if (success !== true) {
        console.log(ssh.LastErrorText);
        return;
    }

    //  Connect to an SSH server:
    var hostname;
    var port;

    //  Hostname may be an IP address or hostname:
    hostname = "10.121.37.150";
    port = 22;

    success = ssh.Connect(hostname,port);
    if (success !== true) {
        console.log(ssh.LastErrorText);
        return;
    }

    //  Wait a max of 5 seconds when reading responses..
    ssh.IdleTimeoutMs = 5000;

    //  Authenticate using login/password:
    success = ssh.AuthenticatePw("work","work1234");
    if (success !== true) {
        console.log(ssh.LastErrorText);
        return;
    }

    //  Once the SSH object is connected and authenticated, we use it
    //  as the underlying transport in our SCP object.
    var scp = new chilkat.Scp();

    //  There is no UnlockComponent method for the SCP object because it uses the SSH object
    //  (which must've been unlocked to establish the connection).
    success = scp.UseSsh(ssh);
    if (success !== true) {
        console.log(scp.LastErrorText);
        return;
    }

    //  This uploads a file to the "uploads/text" directory relative to the HOME
    //  directory of the SSH user account.  For example, if the HOME directory is /home/chilkat,
    //  then this uploads to /home/chilkat/uploads/text/test.txt
    //  Note: The remote target directory must already exist on the SSH server.
    var remotePath = "/home/work/path_map.js";
    var localPath = "C:\\Users\\haoguo\\Desktop\\path_map.js";
    success = scp.UploadFile(localPath,remotePath);
    if (success !== true) {
        console.log(scp.LastErrorText);
        return;
    }

    //  This upload fully specifies the absolute remote path.
    remotePath = "/home/chilkat/junk/abc/hamlet.xml";
    localPath = "/home/bob/hamlet.xml";
    success = scp.UploadFile(localPath,remotePath);
    if (success !== true) {
        console.log(scp.LastErrorText);
        return;
    }

    console.log("SCP upload file success.");

    //  Disconnect
    ssh.Disconnect();

}

chilkatExample();