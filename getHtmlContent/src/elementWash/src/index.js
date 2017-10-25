/**
 * Created by daringuo on 2017/10/25.
 */

$D.getContent__buildHTMLForNode = function (_nodeToBuildHTMLFor, _custom_mode)
{
    var _global__element_index = 0,
        _global__the_html = '',
        _global__exploreNodeToBuildHTMLFor = $D.getContent__exploreNodeAndGetStuff(_nodeToBuildHTMLFor, true);

    //  custom
    switch (_custom_mode)
    {
        case 'above-the-target':
            _global__exploreNodeToBuildHTMLFor = false;
            break;
    }

    //  recursive function
    //  ==================
    var _recursive = function (_node)
    {
        //  increment index -- starts with 1
        //  ===============
        _global__element_index++;

        //  vars
        //  ====
        var _explored = false,
            _tag_name = (_node.nodeType === 3 ? '#text' : ((_node.nodeType === 1 && _node.tagName && _node.tagName > '') ? _node.tagName.toLowerCase() : '#invalid')),
            _pos__start__before = 0,
            _pos__start__after = 0,
            _pos__end__before = 0,
            _pos__end__after = 0;

        //  fast return
        //  ===========
        switch (true)
        {
            case ((_tag_name == '#invalid')):
            case (($D.parseOptions._elements_ignore.indexOf('|'+_tag_name+'|') > -1)):
                return;

            case (_tag_name == '#text'):
                _global__the_html += _node.nodeValue.replace(/</gi, '&lt;').replace(/>/gi, '&gt;');
                return;
        }

        //  hidden
        //  ======
        if (($D.parseOptions._elements_visible.indexOf('|'+_tag_name+'|') > -1) && $D.isNodeHidden(_node, _tag_name)) { return; }

        //  clean -- before
        //  =====

        //  objects, embeds, iframes
        //  ========================
        switch (_tag_name)
        {
            case ('object'):
            case ('embed'):
            case ('iframe'):
                var _src = (_tag_name == 'object' ? $(_node).find("param[name='movie']").attr('value') : $(_node).attr('src')),
                    _skip = ((_src > '') ? false : true);

                if (_skip) {}else
                {
                    //  default skip
                    _skip = true;

                    //  loop
                    for (var i=0, _i=$D.parseOptions._keep_video_from_domain.length; i<_i; i++)
                    { if (_src.indexOf($D.parseOptions._keep_video_from_domain[i]) > -1) { _skip = false; break; } }
                }

                //  skip?
                if (_skip)
                {
                    _explored = (_explored || $D.getContent__exploreNodeAndGetStuff(_node, true));
                    if (_explored && _explored._is__unskippable) {}else
                    {
                        $D.debugOutline(_node, 'clean-before', 'object-embed-iframe');
                        return;
                    }
                }

                break;
        }

        //  skipped link
        //  ============
        if (_tag_name == 'a' || _tag_name == 'li')
        {
            _explored = (_explored || $D.getContent__exploreNodeAndGetStuff(_node, true));
            if (_explored && _explored._is__unskippable) {}else
            {
                switch (true)
                {
                    case (_explored._is__link_skip):
                    case (((_explored._count__images_small + _explored._count__images_skip) > 0) && (_explored._length__plain_text < 65)):
                        $D.debugOutline(_node, 'clean-before', 'skip-link');
                        return;
                }
            }
        }

        //  link density
        //  ============
        if ($D.parseOptions._elements_link_density.indexOf('|'+_tag_name+'|') > -1)
        {
            _explored = (_explored || $D.getContent__exploreNodeAndGetStuff(_node, true));
            if (_explored && _explored._is__unskippable) {}else
            {
                switch (true)
                {
                    case (_explored._length__plain_text > (65 * 3 * 2)):
                    case ($D.language == 'cjk' && (_explored._length__plain_text > (65 * 3 * 1))):
                    case (!(_explored._count__links > 1)):
                    case (_global__exploreNodeToBuildHTMLFor && (_explored._length__plain_text / _global__exploreNodeToBuildHTMLFor._length__plain_text) > 0.5):
                    case (_global__exploreNodeToBuildHTMLFor && (_explored._count__plain_words / _global__exploreNodeToBuildHTMLFor._count__plain_words) > 0.5):
                    case ((_explored._length__plain_text == 0) && (_explored._count__links == 1) && (_explored._length__links_text < 65)):
                    case ((_explored._length__plain_text < 25) && ((_explored._count__images_large + _explored._count__images_medium) > 0)):
                        break;

                    case ((_explored._length__links_text / _explored._length__all_text) < 0.5):
                        if (_explored._count__links > 0) {}else { break; }
                        if (_explored._count__links_skip > 0) {}else { break; }
                        if (((_explored._count__links_skip / _explored._count__links) > 0.25) && (_explored._length__links_text / _explored._length__all_text) < 0.05) { break; }

                    default:
                        $D.debugOutline(_node, 'clean-before', 'link-density');
                        return;
                }
            }
        }

        //  floating
        //  ========
        if ($D.parseOptions._elements_floating.indexOf('|'+_tag_name+'|') > -1)
        {
            _explored = (_explored || $D.getContent__exploreNodeAndGetStuff(_node, true));
            if (_explored && _explored._is__unskippable) {}else
            {
                switch (true)
                {
                    case (_explored._length__plain_text > (65 * 3 * 2)):
                    case ($D.language == 'cjk' && (_explored._length__plain_text > (65 * 3 * 1))):
                    case (_global__exploreNodeToBuildHTMLFor && (_explored._length__plain_text / _global__exploreNodeToBuildHTMLFor._length__plain_text) > 0.25):
                    case (_global__exploreNodeToBuildHTMLFor && (_explored._count__plain_words / _global__exploreNodeToBuildHTMLFor._count__plain_words) > 0.25):
                    case ((_explored._length__plain_text < 25) && (_explored._length__links_text < 25) && ((_explored._count__images_large + _explored._count__images_medium) > 0)):
                    case (_node.getElementsByTagName && (_explored._length__plain_text < (65 * 3 * 1)) && ((_node.getElementsByTagName('h1').length + _node.getElementsByTagName('h2').length + _node.getElementsByTagName('h3').length + _node.getElementsByTagName('h4').length) > 0)):
                        break;

                    default:
                        var _float = $(_node).css('float');
                        if (_float == 'left' || _float == 'right') {}else { break; }
                        if ((_explored._length__links_text == 0) && ((_explored._count__images_large + _explored._count__images_medium) > 0)) { break; }

                        $D.debugOutline(_node, 'clean-before', 'floating');
                        return;
                }
            }
        }

        //  above target
        //  ============
        if (_custom_mode == 'above-the-target')
        {
            //  is ignored?
            if ($D.parseOptions._elements_above_target_ignore.indexOf('|'+_tag_name+'|') > -1)
            {
                _explored = (_explored || $D.getContent__exploreNodeAndGetStuff(_node, true));
                if (_explored && _explored._is__unskippable) {}else
                {
                    $D.debugOutline(_node, 'clean-before', 'above-target');
                    return;
                }
            }

            //  is image?
            if (_tag_name == 'img')
            {
                _explored = (_explored || $D.getContent__exploreNodeAndGetStuff(_node, true));
                if (_explored && _explored._is__unskippable) {}else
                {
                    if (_explored._is__image_large) {}else
                    {
                        $D.debugOutline(_node, 'clean-before', 'above-target');
                        return;
                    }
                }
            }

            //  has too many links?
            //if (_node.getElementsByTagName && _node.getElementsByTagName('a').length > 5)
            //  { $D.debugOutline(_node, 'clean-before', 'above-target'); return; }
        }

        //  headers that are images
        //  =======================
        if (_tag_name.match(/^h(1|2|3|4|5|6)$/gi) != null)
        {
            _explored = (_explored || $D.getContent__exploreNodeAndGetStuff(_node, true));
            if (_explored && _explored._is__unskippable) {}else
            {
                switch (true)
                {
                    case ((_explored._length__plain_text < 10) && ((_explored._count__images_small + _explored._count__images_medium + _explored._count__images_large + _explored._count__images_skip) > 0)):
                        $D.debugOutline(_node, 'clean-before', 'skip-heading');
                        return;
                }
            }
        }

        //  start tag
        //  =========
        if ($D.parseOptions._elements_ignore_tag.indexOf('|'+_tag_name+'|') > -1) {}else
        {
            /* mark */    _pos__start__before = _global__the_html.length;
            /* add */     _global__the_html += '<'+_tag_name;

            //  attributes
            //  ==========

            //  allowed attributes
            if (_tag_name in $D.parseOptions._elements_keep_attributes)
            {
                for (var i=0, _i=$D.parseOptions._elements_keep_attributes[_tag_name].length; i<_i; i++)
                {
                    //  get
                    var _attribute_name = $D.parseOptions._elements_keep_attributes[_tag_name][i],
                        _attribute_value = _node.getAttribute(_attribute_name);

                    //  special case: override src/href attributes -- they may be relative URLs
                    if (_attribute_name == 'src' || _attribute_name == 'href')
                    {
                        if ((_tag_name == 'a') || ($D.parseOptions._elements_with_src.indexOf('|'+_tag_name+'|') > -1))
                        {
                            switch (true)
                            {
                                case (!!(_attribute_name == 'src' &&  _node.src)):
                                    _attribute_value = _node.src; break;

                                case (!!(_attribute_name == 'href' && _node.href)):
                                    _attribute_value = _node.href; break;
                            }
                        }
                    }

                    //  if present, write
                    if (_attribute_value > '') { _global__the_html += ' '+_attribute_name+'="'+_attribute_value+'"'; }
                }
            }

            //  keep ID for all elements
            // var _id_attribute = _node.getAttribute('id');
            // if (_id_attribute > '')
            // { _global__the_html += ' id="'+_id_attribute+'"'; }

            //  links target NEW
            if (_tag_name == 'a')
            { _global__the_html += ' target="_blank"'; }

            //  close start
            //  ===========
            if ($D.parseOptions._elements_self_closing.indexOf('|'+_tag_name+'|') > -1) { _global__the_html += ' />'; }
            else { _global__the_html += '>';}

            /* mark */ _pos__start__after = _global__the_html.length;
        }

        //  child nodes
        //  ===========
        if ($D.parseOptions._elements_self_closing.indexOf('|'+_tag_name+'|') > -1) {}else
        {
            for (var i=0, _i=_node.childNodes.length; i<_i; i++)
            { _recursive(_node.childNodes[i]); }
        }

        //  end tag
        //  =======
        switch (true)
        {
            case (($D.parseOptions._elements_ignore_tag.indexOf('|'+_tag_name+'|') > -1)):
                return;

            case (($D.parseOptions._elements_self_closing.indexOf('|'+_tag_name+'|') > -1)):
                /* mark */     _pos__end__before = _global__the_html.length;
                /* mark */     _pos__end__after = _global__the_html.length;
                break;

            default:
                /* mark */     _pos__end__before = _global__the_html.length;
                /* end */      _global__the_html += '</'+_tag_name+'>';
                /* mark */     _pos__end__after = _global__the_html.length;
                break;
        }

        //  clean -- after
        //  =====

        //  custom, per-site quirks
        //  =======================

        //  wikipedia -- remove edit links in headers
        //  =========
        if ($D.domainNameIs__wikipedia && ('|h1|h2|h3|h4|h5|h6|'.indexOf('|'+_tag_name+'|') > -1))
        {
            //  replace
            _global__the_html = ''                              +
                _global__the_html.substr(0, _pos__start__after) +
                _global__the_html.substr(_pos__start__after, _pos__end__before).replace(/<a([^>]+?)>edit<\/a>/gi, '') +
                _global__the_html.substr(_pos__end__before)     +
                '';
        }

        //  wsj.com -- remove stock ticker widgets
        //  =======
        if ($D.domainNameIs__wsj && (_tag_name == 'span') && (_node.className) && (_node.className.indexOf('article-chiclet') > -1))
        {
            //  structure looks like this:
            //      <span class="article-chiclet up" ...><span><a ...>{text-we-want-to-keep}</a></span><span ...>{info-card}</span>

            //  compute
            var _full_content = _global__the_html.substr(_pos__start__after, _pos__end__before),
                _keep_content = _full_content.substr(_full_content.indexOf('<a '), _full_content.indexOf('</a>')) + '</a>';

            //  replace
            _global__the_html = ''                               +
                _global__the_html.substr(0, _pos__start__before) +
                '( ' + _keep_content + ' )'                      +
                _global__the_html.substr(_pos__end__after)       +
                '';
        }

        //  remove empty spans -- or spans with P in them
        /*if (_tag_name == 'span')
         {
         var _contents = _global__the_html.substr(_pos__start__after, (_pos__end__before - _pos__start__after)).replace(/\s+/gi, '').toLowerCase();
         if ((_contents == 'p') || (_contents == '')) {
         _global__the_html = ''                               +
         _global__the_html.substr(0, _pos__start__before) +
         _global__the_html.substr(_pos__end__after)       +
         '';
         return;
         }
         }*/

        //  largeObject classes
        if (_tag_name == 'iframe' || _tag_name == 'embed' || _tag_name == 'object')
        {
            _global__the_html = ''                                  +
                _global__the_html.substr(0, _pos__start__before)    +
                '<div class="readableLargeObjectContainer">'        +
                _global__the_html.substr(_pos__start__before, (_pos__end__after - _pos__start__before)) +
                '</div>'                                            +
                '';
            return;
        }

        //  add image classes
        if (_tag_name == 'img')
        {
            _explored = (_explored || $D.getContent__exploreNodeAndGetStuff(_node, true));
            if (_explored && _explored._is__unskippable) {}else
            {
                switch (true)
                {
                    case (_explored._is__image_skip):
                        $D.debugOutline(_node, 'clean-after', 'skip-img');
                        _global__the_html = _global__the_html.substr(0, _pos__start__before);
                        return;

                    case (_explored._is__image_large):

                        //  add float class -- for images too narrow/tall
                        //  remove width/height -- only for large images

                        //  http://www.wired.com/threatlevel/2011/05/gps-gallery/?pid=89&viewall=true
                        //  http://david-smith.org/blog/2012/03/10/ios-5-dot-1-upgrade-stats/index.html
                        //  http://www.turntablekitchen.com/2012/04/dutch-baby-with-caramelized-vanilla-bean-pears-moving-through-the-decades/

                        _global__the_html = ''                                  +
                            _global__the_html.substr(0, _pos__start__before)    +
                            '<div class="qb_sc_image_container' + (($(_node).width() <= 250) && ($(_node).height() >= 250) ? ' float' : '') + '">' +
                            _global__the_html.substr(_pos__start__before, (_pos__end__after - _pos__start__before)).replace(/width="([^=]+?)"/gi, '').replace(/height="([^=]+?)"/gi, '') +
                            '</div>'                                            +
                            '';
                        return;
                }
            }
        }

        //  large images in links
        if (_tag_name == 'a')
        {
            _explored = (_explored || $D.getContent__exploreNodeAndGetStuff(_node, true));
            switch (true)
            {
                case (_explored._count__images_large == 1):
                    _global__the_html = ''                                  +
                        _global__the_html.substr(0, _pos__start__after-1)   +
                        ' class="readableLinkWithLargeImage">'              +
                        _global__the_html.substr(_pos__start__after, (_pos__end__before - _pos__start__after)) +
                        '</a>'                                              +
                        '';
                    return;

                case (_explored._count__images_medium == 1):
                    _global__the_html = ''                                  +
                        _global__the_html.substr(0, _pos__start__after-1)   +
                        ' class="readableLinkWithMediumImage">'             +
                        _global__the_html.substr(_pos__start__after, (_pos__end__before - _pos__start__after)) +
                        '</a>'                                              +
                        '';
                    return;
            }
        }

        //  too much content
        if ($D.parseOptions._elements_too_much_content.indexOf('|'+_tag_name+'|') > -1)
        {
            _explored = (_explored || $D.getContent__exploreNodeAndGetStuff(_node, true));
            if (_explored && _explored._is__unskippable) {}else
            {
                switch (true)
                {
                    case (_tag_name == 'h1' && (_explored._length__all_text > (65 * 2))):
                    case (_tag_name == 'h2' && (_explored._length__all_text > (65 * 2 * 3))):
                    case ((_tag_name.match(/^h(3|4|5|6)$/) != null) && (_explored._length__all_text > (65 * 2 * 5))):
                    case ((_tag_name.match(/^(b|i|em|strong)$/) != null) && (_explored._length__all_text > (65 * 5 * 5))):
                        $D.debugOutline(_node, 'clean-after', 'too-much-content');
                        _global__the_html = ''                                                                      +
                            _global__the_html.substr(0, _pos__start__before)                                        +
                            _global__the_html.substr(_pos__start__after, (_pos__end__before - _pos__start__after))  +
                            '';
                        return;
                }
            }
        }

        //  empty elements
        switch (true)
        {
            case (($D.parseOptions._elements_self_closing.indexOf('|'+_tag_name+'|') > -1)):
            case (($D.parseOptions._elements_ignore_tag.indexOf('|'+_tag_name+'|') > -1)):
            case (_tag_name == 'td'):
                break;

            default:
                var _contents = _global__the_html.substr(_pos__start__after, (_pos__end__before - _pos__start__after));
                _contents = _contents.replace(/(<br \/>)/gi, '');
                _contents = _contents.replace(/(<hr \/>)/gi, '');

                //  for rows, clear empty cells
                if (_tag_name == 'tr')
                {
                    _contents = _contents.replace(/<td[^>]*?>/gi, '');
                    _contents = _contents.replace(/<\/td>/gi, '');
                }

                //  for tables, clear empty rows
                if (_tag_name == 'table')
                {
                    _contents = _contents.replace(/<tr[^>]*?>/gi, '');
                    _contents = _contents.replace(/<\/tr>/gi, '');
                }

                var _contentsLength = $D.measureText__getTextLength(_contents);

                _explored = (_explored || $D.getContent__exploreNodeAndGetStuff(_node, true));
                if (_explored && _explored._is__unskippable) {}else
                {
                    switch (true)
                    {
                        case (_contentsLength == 0 && _tag_name == 'p'):
                            _global__the_html = _global__the_html.substr(0, _pos__start__before) + '<br /><br />';
                            return;

                        case (_contentsLength == 0):
                        case ((_contentsLength < 5) && ($D.parseOptions._elements_visible.indexOf('|'+_tag_name+'|') > -1)):
                            $D.debugOutline(_node, 'clean-after', 'blank');
                            _global__the_html = _global__the_html.substr(0, _pos__start__before);
                            return;
                    }
                }

                break;
        }

        //  too much missing
        if ($D.parseOptions._elements_link_density.indexOf('|'+_tag_name+'|') > -1)
        {
            _explored = (_explored || $D.getContent__exploreNodeAndGetStuff(_node, true));
            if (_explored && _explored._is__unskippable) {}else
            {
                var _contents = _global__the_html.substr(_pos__start__after, (_pos__end__before - _pos__start__after)).replace(/(<([^>]+)>)/gi, ''),
                    _contentsLength = $D.measureText__getTextLength(_contents),
                    _initialLength = 0                                           +
                        _explored._length__all_text                              +
                        (_explored._count__images_small                    * 10) +
                        (_explored._count__images_skip                     * 10) +
                        (_node.getElementsByTagName('iframe').length       * 10) +
                        (_node.getElementsByTagName('object').length       * 10) +
                        (_node.getElementsByTagName('embed').length        * 10) +
                        (_node.getElementsByTagName('button').length       * 10) +
                        (_node.getElementsByTagName('input').length        * 10) +
                        (_node.getElementsByTagName('select').length       * 10) +
                        (_node.getElementsByTagName('textarea').length     * 10);

                //  too much missing
                switch (true)
                {
                    case (!(_contentsLength > 0)):
                    case (!(_initialLength > 0)):
                    case (!((_contentsLength / _initialLength) < 0.5)):
                    case (!(($D.language == 'cjk') && (_contentsLength / _initialLength) < 0.1)):
                    case ((_global__exploreNodeToBuildHTMLFor && ((_explored._length__plain_text / _global__exploreNodeToBuildHTMLFor._length__plain_text) > 0.25))):
                    case (($D.language == 'cjk') && (_global__exploreNodeToBuildHTMLFor && ((_explored._length__plain_text / _global__exploreNodeToBuildHTMLFor._length__plain_text) > 0.1))):
                        break;

                    default:
                        $D.debugOutline(_node, 'clean-after', 'missing-density');
                        _global__the_html = _global__the_html.substr(0, _pos__start__before);
                        return;
                }
            }
        }


        //  return
        return;
    };

    //  actually do it
    _recursive(_nodeToBuildHTMLFor);

    //  return html
    return _global__the_html;
};

$D.getHtml = function (node) {
    var _html = $D.getContent__buildHTMLForNode(node, 'the-target');
    _html = _html.substr((_html.indexOf('>')+1));
    _html = _html.substr(0, _html.lastIndexOf('<'));

    //_html = _html.replace(/([,.:?!])(\s*)(p<\/p>)/gi, '$1</p>');
    _html = _html.replace(/<span([^>]*?)>p<\/span>\s*?<\/(div|h1|h2|h3|h4|h5|h6|li|p|span)/gi, '</$2');
    _html = _html.replace(/<(\/)?span([^>]*?)>/gi, '');
    _html = _html.replace(/<(blockquote|div|p|td|li)([^>]*)>(\s*<br \/>)+/gi, '<$1$2>');
    _html = _html.replace(/(<br \/>\s*)+<\/(blockquote|div|p|td|li)>/gi, '</$2>');
    _html = _html.replace(/(<br \/>\s*)+<(blockquote|div|h\d|ol|p|table|ul|li)([^>]*)>/gi, '<$2$3>');
    _html = _html.replace(/<\/(blockquote|div|h\d|ol|p|table|ul|li)>(\s*<br \/>)+/gi, '</$1>');
    _html = _html.replace(/(<hr \/>\s*<hr \/>\s*)+/gi, '<hr />');
    _html = _html.replace(/(<br \/>\s*<br \/>\s*)+/gi, '<br /><br />');
    return _html;
};

