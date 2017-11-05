/**
 * Created by daringuo on 2017/10/25.
 */
let compute = (obj, global_sentences, global_img_num, global_good_contaniners) => {
    if (obj.text_length === 0) {
        obj.point = Math.log(1 / (obj.tagsNum + 1));
    } else {
        let isNegative = Math.log((obj.pure_text_length + 1) / (obj.link_text_length + 1));
        let childContainerEffect = (obj.child_good_containers / global_good_contaniners) * 2;
        let imgEffect = (obj.img_num + 1) / global_img_num + 1;
        let sentencesEffect = ((obj.pure_text_sentence + 1) / global_sentences) * 50;
        let bigTextEffect = Math.log((obj.pure_text_length) / 50);
        let bigSentenceEffect = Math.log(obj.pure_text_sentence / 10);
        let tagsEffect = Math.abs(Math.log((obj.pure_text_length + 1) / (obj.tagsNum + 1)));
        

        obj._point = {
            isNegative,
            childContainerEffect,
            imgEffect,
            sentencesEffect,
            tagsEffect
        };

        // obj.point = isNegative * childContainerEffect * imgEffect * sentencesEffect * tagsEffect;
        if (isNegative <= 0) {
            obj.point = -1;
        } else {
            obj.point = isNegative + bigTextEffect + bigSentenceEffect  + imgEffect + sentencesEffect + tagsEffect;
        }

        obj._point = {
            bigTextEffect,
            bigSentenceEffect,
            isNegative,
            childContainerEffect,
            imgEffect,
            sentencesEffect,
            tagsEffect,
            point: obj.point
        };

    }
};

export default compute;