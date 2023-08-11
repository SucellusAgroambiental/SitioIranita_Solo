var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Salgada_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Salgada",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Salgada_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-4671942.402563, -2383714.329812, -4671652.636145, -2383403.047499]
                            })
                        });
var lyr_Aude_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Açude",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Aude_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-4671133.160647, -2383628.577459, -4670777.740410, -2383318.236459]
                            })
                        });
var lyr_Sede_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Sede",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Sede_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-4670902.916524, -2384308.112015, -4670292.454138, -2383721.271149]
                            })
                        });
var lyr_Salgada_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Salgada",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Salgada_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-4671899.985887, -2383635.821561, -4671708.829059, -2383445.443471]
                            })
                        });
var lyr_Aude_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Açude",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Aude_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-4671097.547314, -2383536.120415, -4670879.953580, -2383367.829997]
                            })
                        });
var lyr_Sede_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "Sede",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Sede_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-4670772.137772, -2384186.927993, -4670419.254986, -2383871.082931]
                            })
                        });
var format_Ca_7 = new ol.format.GeoJSON();
var features_Ca_7 = format_Ca_7.readFeatures(json_Ca_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ca_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ca_7.addFeatures(features_Ca_7);
var lyr_Ca_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ca_7, 
                style: style_Ca_7,
                interactive: true,
    title: 'Ca<br />\
    <img src="styles/legend/Ca_7_0.png" /> 2,4<br />\
    <img src="styles/legend/Ca_7_1.png" /> 3,3<br />\
    <img src="styles/legend/Ca_7_2.png" /> 3,4<br />\
    <img src="styles/legend/Ca_7_3.png" /> 3,5<br />'
        });
var format_H_8 = new ol.format.GeoJSON();
var features_H_8 = format_H_8.readFeatures(json_H_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_H_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_H_8.addFeatures(features_H_8);
var lyr_H_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_H_8, 
                style: style_H_8,
                interactive: true,
    title: 'H+<br />\
    <img src="styles/legend/H_8_0.png" /> 2,2<br />\
    <img src="styles/legend/H_8_1.png" /> 2,4<br />\
    <img src="styles/legend/H_8_2.png" /> 2,5<br />\
    <img src="styles/legend/H_8_3.png" /> 2,6<br />\
    <img src="styles/legend/H_8_4.png" /> 2,9<br />\
    <img src="styles/legend/H_8_5.png" /> 3<br />\
    <img src="styles/legend/H_8_6.png" /> 3,1<br />\
    <img src="styles/legend/H_8_7.png" /> 3,2<br />\
    <img src="styles/legend/H_8_8.png" /> 3,3<br />\
    <img src="styles/legend/H_8_9.png" /> 5,5<br />'
        });
var format_K_9 = new ol.format.GeoJSON();
var features_K_9 = format_K_9.readFeatures(json_K_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_K_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_K_9.addFeatures(features_K_9);
var lyr_K_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_K_9, 
                style: style_K_9,
                interactive: true,
    title: 'K+<br />\
    <img src="styles/legend/K_9_0.png" /> 57,4<br />\
    <img src="styles/legend/K_9_1.png" /> 60,5<br />\
    <img src="styles/legend/K_9_2.png" /> 83,8<br />\
    <img src="styles/legend/K_9_3.png" /> 103,5<br />\
    <img src="styles/legend/K_9_4.png" /> 107,1<br />\
    <img src="styles/legend/K_9_5.png" /> 120,6<br />\
    <img src="styles/legend/K_9_6.png" /> 127,5<br />\
    <img src="styles/legend/K_9_7.png" /> 142<br />\
    <img src="styles/legend/K_9_8.png" /> 152,8<br />\
    <img src="styles/legend/K_9_9.png" /> 172,4<br />'
        });
var format_Mg_10 = new ol.format.GeoJSON();
var features_Mg_10 = format_Mg_10.readFeatures(json_Mg_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mg_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mg_10.addFeatures(features_Mg_10);
var lyr_Mg_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mg_10, 
                style: style_Mg_10,
                interactive: true,
    title: 'Mg<br />\
    <img src="styles/legend/Mg_10_0.png" /> 1,2<br />\
    <img src="styles/legend/Mg_10_1.png" /> 1,3<br />\
    <img src="styles/legend/Mg_10_2.png" /> 1,4<br />\
    <img src="styles/legend/Mg_10_3.png" /> 1,5<br />'
        });
var format_pH_11 = new ol.format.GeoJSON();
var features_pH_11 = format_pH_11.readFeatures(json_pH_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pH_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pH_11.addFeatures(features_pH_11);
var lyr_pH_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pH_11, 
                style: style_pH_11,
                interactive: true,
    title: 'pH<br />\
    <img src="styles/legend/pH_11_0.png" /> 5,4<br />\
    <img src="styles/legend/pH_11_1.png" /> 6<br />\
    <img src="styles/legend/pH_11_2.png" /> 6,1<br />\
    <img src="styles/legend/pH_11_3.png" /> 6,2<br />\
    <img src="styles/legend/pH_11_4.png" /> 6,3<br />\
    <img src="styles/legend/pH_11_5.png" /> 6,4<br />'
        });
var format_LimiteStioIranita_12 = new ol.format.GeoJSON();
var features_LimiteStioIranita_12 = format_LimiteStioIranita_12.readFeatures(json_LimiteStioIranita_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteStioIranita_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteStioIranita_12.addFeatures(features_LimiteStioIranita_12);
var lyr_LimiteStioIranita_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteStioIranita_12, 
                style: style_LimiteStioIranita_12,
                interactive: true,
                title: '<img src="styles/legend/LimiteStioIranita_12.png" /> Limite Sítio Iranita'
            });
var format_TalhesProdutivos_13 = new ol.format.GeoJSON();
var features_TalhesProdutivos_13 = format_TalhesProdutivos_13.readFeatures(json_TalhesProdutivos_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TalhesProdutivos_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TalhesProdutivos_13.addFeatures(features_TalhesProdutivos_13);
var lyr_TalhesProdutivos_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TalhesProdutivos_13, 
                style: style_TalhesProdutivos_13,
                interactive: true,
    title: 'Talhões Produtivos<br />\
    <img src="styles/legend/TalhesProdutivos_13_0.png" /> T01<br />\
    <img src="styles/legend/TalhesProdutivos_13_1.png" /> T02<br />\
    <img src="styles/legend/TalhesProdutivos_13_2.png" /> T03<br />\
    <img src="styles/legend/TalhesProdutivos_13_3.png" /> T04<br />\
    <img src="styles/legend/TalhesProdutivos_13_4.png" /> T05<br />\
    <img src="styles/legend/TalhesProdutivos_13_5.png" /> T07<br />\
    <img src="styles/legend/TalhesProdutivos_13_6.png" /> T08<br />\
    <img src="styles/legend/TalhesProdutivos_13_7.png" /> T09<br />\
    <img src="styles/legend/TalhesProdutivos_13_8.png" /> T10<br />\
    <img src="styles/legend/TalhesProdutivos_13_9.png" /> T11<br />'
        });
var group_NutrientesdoSolo = new ol.layer.Group({
                                layers: [lyr_Ca_7,lyr_H_8,lyr_K_9,lyr_Mg_10,lyr_pH_11,],
                                title: "Nutrientes do Solo"});
var group_NDVI = new ol.layer.Group({
                                layers: [lyr_Salgada_4,lyr_Aude_5,lyr_Sede_6,],
                                title: "NDVI"});
var group_Ortofotos = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_Salgada_1,lyr_Aude_2,lyr_Sede_3,],
                                title: "Ortofotos"});

lyr_GoogleSatellite_0.setVisible(true);lyr_Salgada_1.setVisible(true);lyr_Aude_2.setVisible(true);lyr_Sede_3.setVisible(true);lyr_Salgada_4.setVisible(true);lyr_Aude_5.setVisible(true);lyr_Sede_6.setVisible(true);lyr_Ca_7.setVisible(false);lyr_H_8.setVisible(false);lyr_K_9.setVisible(false);lyr_Mg_10.setVisible(false);lyr_pH_11.setVisible(false);lyr_LimiteStioIranita_12.setVisible(true);lyr_TalhesProdutivos_13.setVisible(true);
var layersList = [group_Ortofotos,group_NDVI,group_NutrientesdoSolo,lyr_LimiteStioIranita_12,lyr_TalhesProdutivos_13];
lyr_Ca_7.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'localizaç': 'localizaç', 'area_m': 'area_m', 'area_ha': 'area_ha', 'perim_m': 'perim_m', 'ph': 'ph', 'ca (cmolc)': 'ca (cmolc)', 'mg (cmolc)': 'mg (cmolc)', 'al (cmolc)': 'al (cmolc)', 'h+': 'h+', 'k+': 'k+', });
lyr_H_8.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'localizaç': 'localizaç', 'area_m': 'area_m', 'area_ha': 'area_ha', 'perim_m': 'perim_m', 'ph': 'ph', 'ca (cmolc)': 'ca (cmolc)', 'mg (cmolc)': 'mg (cmolc)', 'al (cmolc)': 'al (cmolc)', 'h+': 'h+', 'k+': 'k+', });
lyr_K_9.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'localizaç': 'localizaç', 'area_m': 'area_m', 'area_ha': 'area_ha', 'perim_m': 'perim_m', 'ph': 'ph', 'ca (cmolc)': 'ca (cmolc)', 'mg (cmolc)': 'mg (cmolc)', 'al (cmolc)': 'al (cmolc)', 'h+': 'h+', 'k+': 'k+', });
lyr_Mg_10.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'localizaç': 'localizaç', 'area_m': 'area_m', 'area_ha': 'area_ha', 'perim_m': 'perim_m', 'ph': 'ph', 'ca (cmolc)': 'ca (cmolc)', 'mg (cmolc)': 'mg (cmolc)', 'al (cmolc)': 'al (cmolc)', 'h+': 'h+', 'k+': 'k+', });
lyr_pH_11.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'localizaç': 'localizaç', 'area_m': 'area_m', 'area_ha': 'area_ha', 'perim_m': 'perim_m', 'ph': 'ph', 'ca (cmolc)': 'ca (cmolc)', 'mg (cmolc)': 'mg (cmolc)', 'al (cmolc)': 'al (cmolc)', 'h+': 'h+', 'k+': 'k+', });
lyr_LimiteStioIranita_12.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Area_ha': 'Area_ha', });
lyr_TalhesProdutivos_13.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_Ca_7.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'localizaç': 'TextEdit', 'area_m': 'TextEdit', 'area_ha': 'TextEdit', 'perim_m': 'TextEdit', 'ph': 'TextEdit', 'ca (cmolc)': 'TextEdit', 'mg (cmolc)': 'TextEdit', 'al (cmolc)': 'TextEdit', 'h+': 'TextEdit', 'k+': 'TextEdit', });
lyr_H_8.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'localizaç': 'TextEdit', 'area_m': 'TextEdit', 'area_ha': 'TextEdit', 'perim_m': 'TextEdit', 'ph': 'TextEdit', 'ca (cmolc)': 'TextEdit', 'mg (cmolc)': 'TextEdit', 'al (cmolc)': 'TextEdit', 'h+': 'TextEdit', 'k+': 'TextEdit', });
lyr_K_9.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'localizaç': 'TextEdit', 'area_m': 'TextEdit', 'area_ha': 'TextEdit', 'perim_m': 'TextEdit', 'ph': 'TextEdit', 'ca (cmolc)': 'TextEdit', 'mg (cmolc)': 'TextEdit', 'al (cmolc)': 'TextEdit', 'h+': 'TextEdit', 'k+': 'TextEdit', });
lyr_Mg_10.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'localizaç': 'TextEdit', 'area_m': 'TextEdit', 'area_ha': 'TextEdit', 'perim_m': 'TextEdit', 'ph': 'TextEdit', 'ca (cmolc)': 'TextEdit', 'mg (cmolc)': 'TextEdit', 'al (cmolc)': 'TextEdit', 'h+': 'TextEdit', 'k+': 'TextEdit', });
lyr_pH_11.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'localizaç': 'TextEdit', 'area_m': 'TextEdit', 'area_ha': 'TextEdit', 'perim_m': 'TextEdit', 'ph': 'TextEdit', 'ca (cmolc)': 'TextEdit', 'mg (cmolc)': 'TextEdit', 'al (cmolc)': 'TextEdit', 'h+': 'TextEdit', 'k+': 'TextEdit', });
lyr_LimiteStioIranita_12.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_TalhesProdutivos_13.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_Ca_7.set('fieldLabels', {});
lyr_H_8.set('fieldLabels', {});
lyr_K_9.set('fieldLabels', {});
lyr_Mg_10.set('fieldLabels', {});
lyr_pH_11.set('fieldLabels', {});
lyr_LimiteStioIranita_12.set('fieldLabels', {'fid': 'no label', 'Name': 'inline label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Area_ha': 'inline label', });
lyr_TalhesProdutivos_13.set('fieldLabels', {'fid': 'no label', 'Talhão': 'no label', 'Localizaç': 'no label', 'Área (m)': 'no label', 'Área (ha)': 'no label', 'Perimetro ': 'no label', 'Variedade': 'no label', 'Ano de Pla': 'no label', 'Altitude M': 'no label', 'Altitude M_1': 'no label', ' Diferenç': 'no label', 'N Linhas': 'no label', 'N Falhas': 'no label', });
lyr_TalhesProdutivos_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});