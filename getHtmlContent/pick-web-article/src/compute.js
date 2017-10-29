/**
 * Created by daringuo on 2017/10/25.
 */
let compute = (obj, global_sentences, global_img_num) => {
    if (obj.text_length === 0) {
        obj.point = Math.log(1 / (obj.tagsNum + 1));
    } else {
        let isNegative = Math.log((obj.text_length - obj.link_text_length + 1) / (obj.link_text_length + 1));
        let imgEffect = obj.img_num / global_img_num + 1;
        let sentencesEffect = obj.sentences / global_sentences + 1;
        let tagsEffect = Math.abs(Math.log((obj.text_length + 1) / (obj.tagsNum + 1)));
        obj.point = isNegative * imgEffect * sentencesEffect * tagsEffect;
    }
};

export default compute;