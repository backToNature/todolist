/**
 * Created by daringuo on 2017/10/25.
 */
let compute = (obj, global_sentences) => {

    // console.log(obj, global_sentences);

    let point = ((obj.text_length - obj.link_text_length) / (obj.link_text_length + 1)) * (obj.sentences / global_sentences) * (obj.text_length / obj.tagsNum);

    // console.log(((obj.text_length - obj.link_text_length) / (obj.link_text_length + 1)));
    obj.point = point;

    // console.log(obj);
};

module.exports = compute;