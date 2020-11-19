var plugins = [{
      plugin: require('/Volumes/System/perso/www/conseil-piscine/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Volumes/System/perso/www/conseil-piscine/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#303030","theme_color":"#303030","display":"minimal-ui","icon":"src/images/gatsby-icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"fe154189372dead844110f61d1484ad8"},
    },{
      plugin: require('/Volumes/System/perso/www/conseil-piscine/node_modules/gatsby-source-prismic/gatsby-ssr'),
      options: {"plugins":[],"repositoryName":"conseil-piscine","accessToken":"MC5YN1RTTVJJQUFDTUFnNWct.XyAlXu-_vUhucGrvv71177-9A--_vSPvv73vv73vv70577-9fO-_vXLvv70y77-977-9c1Jf77-9Ew","lang":"fr-fr","schemas":{"post":{"Main":{"post_title":{"type":"StructuredText","config":{"single":"heading1, heading2, heading3, heading4, heading5, heading6","label":"post title"}},"post_preview_description":{"type":"StructuredText","config":{"multi":"paragraph, strong, em, hyperlink, list-item","label":"post preview description"}},"post_hero_image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"post hero image"}},"post_hero_annotation":{"type":"StructuredText","config":{"single":"heading6, strong, em, hyperlink","allowTargetBlank":true,"label":"post hero annotation"}},"post_date":{"type":"Date","config":{"label":"post date"}},"post_body":{"type":"Slices","fieldset":"Slice zone","config":{"choices":{"text":{"type":"Slice","fieldset":"Text","description":"A Rich Text section","icon":"text_fields","non-repeat":{"rich_text":{"type":"StructuredText","config":{"multi":"paragraph, preformatted, strong, em, hyperlink, image, embed, list-item, o-list-item, o-list-item","label":"Rich text","placeholder":"Some rich text"}}},"repeat":{}},"code_snippet":{"type":"Slice","fieldset":"Code Snippet","description":"A code snippet section for example code","icon":"code","non-repeat":{"language":{"type":"StructuredText","config":{"single":"heading1","label":"language","placeholder":"css,javascript,php..."}},"code_snippet":{"type":"StructuredText","config":{"multi":"preformatted","label":"Code Snippet","placeholder":"Enter code snippet..."}}},"repeat":{}},"highlighted_text":{"type":"Slice","fieldset":"Highlighted Text","description":"A highlighted text section for special instructions","icon":"priority_high","non-repeat":{"highlight_title":{"type":"StructuredText","config":{"single":"heading2, heading3, heading4, heading5, heading6","label":"Highlight Title","placeholder":"Highlight Title..."}}},"repeat":{}},"image":{"type":"Slice","fieldset":"Image","description":"An image section","icon":"image","non-repeat":{"image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Image"}}},"repeat":{}},"hn":{"type":"Slice","fieldset":"Hn","description":"Un petit ou un grand Hn","icon":"title","display":"list","non-repeat":{"hn":{"type":"StructuredText","config":{"single":"heading2, heading3, heading4, heading5, heading6","label":"hn","placeholder":"Hn"}}},"repeat":{}}}}}},"Meta":{"uid":{"type":"UID","config":{"label":"uid","placeholder":"Used to generate url"}},"categories":{"type":"Group","config":{"fields":{"category":{"type":"Link","config":{"select":"document","customtypes":["category"],"label":"category","placeholder":"Category"}}},"label":"Categories"}}}},"category":{"Main":{"uid":{"type":"UID","config":{"label":"uid","placeholder":"uid"}},"name":{"type":"Text","config":{"label":"name","placeholder":"Name of the category"}},"description":{"type":"StructuredText","config":{"multi":"paragraph, preformatted, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, rtl","allowTargetBlank":true,"label":"description"}}},"SEO":{"meta_title":{"type":"Text","config":{"label":"Meta title","placeholder":"Meta title"}},"meta_description":{"type":"Text","config":{"label":"Meta description","placeholder":"Meta description"}}}},"amazon":[{"Main":{"amazon_title":{"type":"StructuredText","config":{"single":"heading1, heading2, heading3, heading4, heading5, heading6","label":"Amazon title"}},"amazon_preview_description":{"type":"StructuredText","config":{"multi":"paragraph, strong, em, hyperlink, list-item","label":"Amazon preview description"}},"amazon_hero_image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"amazon hero image"}},"amazon_hero_annotation":{"type":"StructuredText","config":{"single":"heading6, strong, em, hyperlink","allowTargetBlank":true,"label":"amazon hero annotation"}},"amazon_date":{"type":"Date","config":{"label":"amazon date","placeholder":"Amazon date"}},"intro":{"type":"StructuredText","config":{"multi":"paragraph, preformatted, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, rtl","allowTargetBlank":true,"label":"Intro","placeholder":"Introduction"}},"sub_title":{"type":"StructuredText","config":{"single":"heading2","label":"Sub title","placeholder":"Sub title"}},"post_body":{"type":"Slices","fieldset":"Slice zone","config":{"labels":{"product":[]},"choices":{"text":{"type":"Slice","fieldset":"Text","description":"A Rich Text section","icon":"text_fields","non-repeat":{"rich_text":{"type":"StructuredText","config":{"multi":"paragraph, preformatted, heading2, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, rtl","allowTargetBlank":true,"label":"Rich text","placeholder":"Some rich text"}}},"repeat":{"embed":{"type":"Embed","config":{"label":"Embed","placeholder":"Embed"}}}},"highlighted_text":{"type":"Slice","fieldset":"Highlighted Text","description":"A highlighted text section for special instructions","icon":"priority_high","non-repeat":{"highlight_title":{"type":"StructuredText","config":{"single":"heading2, heading3, heading4, heading5, heading6","label":"Highlight Title","placeholder":"Highlight Title..."}}},"repeat":{}},"image":{"type":"Slice","fieldset":"Image","description":"An image section","icon":"image","non-repeat":{"image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Image"}}},"repeat":{}},"hn":{"type":"Slice","fieldset":"Hn","description":"Un petit ou un grand Hn","icon":"title","display":"list","non-repeat":{"hn":{"type":"StructuredText","config":{"single":"heading2, heading3, heading4, heading5, heading6","label":"hn","placeholder":"Hn"}}},"repeat":{}},"product":{"type":"Slice","fieldset":"Product","description":"Product","icon":"attach_money","display":"list","non-repeat":{"title_product":{"type":"StructuredText","config":{"single":"heading3","label":"Title Product","placeholder":"Title product"}},"description_product":{"type":"StructuredText","config":{"multi":"paragraph, preformatted, heading1, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, rtl","allowTargetBlank":true,"label":"Description product"}},"amazon_link":{"type":"Link","config":{"allowTargetBlank":true,"label":"Amazon link","placeholder":"Amazon link"}},"main_image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"main image"}},"key_features":{"type":"StructuredText","config":{"multi":"paragraph, preformatted, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, rtl","allowTargetBlank":true,"label":"Key features"}}},"repeat":{}}}}}},"Meta":{"uid":{"type":"UID","config":{"label":"uid","placeholder":"Used to generate url"}},"categories":{"type":"Group","config":{"fields":{"category":{"type":"Link","config":{"select":"document","customtypes":["category"],"label":"category","placeholder":"Category"}}},"label":"Categories"}}}}]}},
    },{
      plugin: require('/Volumes/System/perso/www/conseil-piscine/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
