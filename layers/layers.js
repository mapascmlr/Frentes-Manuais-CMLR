var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_COBRAPE_1 = new ol.format.GeoJSON();
var features_COBRAPE_1 = format_COBRAPE_1.readFeatures(json_COBRAPE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COBRAPE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COBRAPE_1.addFeatures(features_COBRAPE_1);
var lyr_COBRAPE_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COBRAPE_1, 
                style: style_COBRAPE_1,
                popuplayertitle: "COBRAPE",
                interactive: false,
                title: '<img src="styles/legend/COBRAPE_1.png" /> COBRAPE'
            });
var format_BRASFORM_2 = new ol.format.GeoJSON();
var features_BRASFORM_2 = format_BRASFORM_2.readFeatures(json_BRASFORM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BRASFORM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BRASFORM_2.addFeatures(features_BRASFORM_2);
var lyr_BRASFORM_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BRASFORM_2, 
                style: style_BRASFORM_2,
                popuplayertitle: "BRASFORM",
                interactive: false,
                title: '<img src="styles/legend/BRASFORM_2.png" /> BRASFORM'
            });
var format_R3Engenharia_3 = new ol.format.GeoJSON();
var features_R3Engenharia_3 = format_R3Engenharia_3.readFeatures(json_R3Engenharia_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R3Engenharia_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R3Engenharia_3.addFeatures(features_R3Engenharia_3);
var lyr_R3Engenharia_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R3Engenharia_3, 
                style: style_R3Engenharia_3,
                popuplayertitle: "R3 Engenharia",
                interactive: false,
                title: '<img src="styles/legend/R3Engenharia_3.png" /> R3 Engenharia'
            });
var format_RTCEngenharia_4 = new ol.format.GeoJSON();
var features_RTCEngenharia_4 = format_RTCEngenharia_4.readFeatures(json_RTCEngenharia_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RTCEngenharia_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RTCEngenharia_4.addFeatures(features_RTCEngenharia_4);
var lyr_RTCEngenharia_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RTCEngenharia_4, 
                style: style_RTCEngenharia_4,
                popuplayertitle: "RTC Engenharia",
                interactive: false,
                title: '<img src="styles/legend/RTCEngenharia_4.png" /> RTC Engenharia'
            });
var format_Municpios_5 = new ol.format.GeoJSON();
var features_Municpios_5 = format_Municpios_5.readFeatures(json_Municpios_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municpios_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municpios_5.addFeatures(features_Municpios_5);
var lyr_Municpios_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municpios_5, 
                style: style_Municpios_5,
                popuplayertitle: "Municípios",
                interactive: false,
                title: '<img src="styles/legend/Municpios_5.png" /> Municípios'
            });
var format_CMLRFrentesManuais_6 = new ol.format.GeoJSON();
var features_CMLRFrentesManuais_6 = format_CMLRFrentesManuais_6.readFeatures(json_CMLRFrentesManuais_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CMLRFrentesManuais_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CMLRFrentesManuais_6.addFeatures(features_CMLRFrentesManuais_6);
var lyr_CMLRFrentesManuais_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CMLRFrentesManuais_6, 
                style: style_CMLRFrentesManuais_6,
                popuplayertitle: "CMLR - Frentes Manuais",
                interactive: true,
    title: 'CMLR - Frentes Manuais<br />\
    <img src="styles/legend/CMLRFrentesManuais_6_0.png" /> Em Andamento<br />\
    <img src="styles/legend/CMLRFrentesManuais_6_1.png" /> Finalizado<br />\
    <img src="styles/legend/CMLRFrentesManuais_6_2.png" /> Vistoria Prévia<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_COBRAPE_1.setVisible(true);lyr_BRASFORM_2.setVisible(true);lyr_R3Engenharia_3.setVisible(true);lyr_RTCEngenharia_4.setVisible(true);lyr_Municpios_5.setVisible(true);lyr_CMLRFrentesManuais_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_COBRAPE_1,lyr_BRASFORM_2,lyr_R3Engenharia_3,lyr_RTCEngenharia_4,lyr_Municpios_5,lyr_CMLRFrentesManuais_6];
lyr_COBRAPE_1.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'id': 'id', 'rh': 'rh', 'nome_rh': 'nome_rh', 'area_km': 'area_km', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'area_ha': 'area_ha', 'areaha_tes': 'areaha_tes', 'areakm2': 'areakm2', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', });
lyr_BRASFORM_2.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'id': 'id', 'rh': 'rh', 'nome_rh': 'nome_rh', 'area_km': 'area_km', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'area_ha': 'area_ha', 'areaha_tes': 'areaha_tes', 'areakm2': 'areakm2', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', });
lyr_R3Engenharia_3.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'id': 'id', 'rh': 'rh', 'nome_rh': 'nome_rh', 'area_km': 'area_km', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'area_ha': 'area_ha', 'areaha_tes': 'areaha_tes', 'areakm2': 'areakm2', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', });
lyr_RTCEngenharia_4.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'id': 'id', 'rh': 'rh', 'nome_rh': 'nome_rh', 'area_km': 'area_km', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'area_ha': 'area_ha', 'areaha_tes': 'areaha_tes', 'areakm2': 'areakm2', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', });
lyr_Municpios_5.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_CMLRFrentesManuais_6.set('fieldAliases', {'RH': 'RH', 'Município': 'Município', 'Corpo Hídrico': 'Corpo Hídrico', 'Empresa': 'Empresa', 'Classificação': 'Classificação', 'Início': 'Início', 'Status': 'Status', 'Término': 'Término', 'Antes': 'Antes', 'Durante': 'Durante', 'Depois': 'Depois', 'Coordena Y': 'Coordena Y', 'Coordena X': 'Coordena X', });
lyr_COBRAPE_1.set('fieldImages', {'ogc_fid': 'Range', 'objectid': 'Range', 'id': 'TextEdit', 'rh': 'TextEdit', 'nome_rh': 'TextEdit', 'area_km': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'area_ha': 'TextEdit', 'areaha_tes': 'TextEdit', 'areakm2': 'TextEdit', 'auxiliary_': 'TextEdit', 'auxiliar_1': 'TextEdit', });
lyr_BRASFORM_2.set('fieldImages', {'ogc_fid': 'Range', 'objectid': 'Range', 'id': 'TextEdit', 'rh': 'TextEdit', 'nome_rh': 'TextEdit', 'area_km': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'area_ha': 'TextEdit', 'areaha_tes': 'TextEdit', 'areakm2': 'TextEdit', 'auxiliary_': 'TextEdit', 'auxiliar_1': 'TextEdit', });
lyr_R3Engenharia_3.set('fieldImages', {'ogc_fid': 'Range', 'objectid': 'Range', 'id': 'TextEdit', 'rh': 'TextEdit', 'nome_rh': 'TextEdit', 'area_km': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'area_ha': 'TextEdit', 'areaha_tes': 'TextEdit', 'areakm2': 'TextEdit', 'auxiliary_': 'TextEdit', 'auxiliar_1': 'TextEdit', });
lyr_RTCEngenharia_4.set('fieldImages', {'ogc_fid': 'Range', 'objectid': 'Range', 'id': 'TextEdit', 'rh': 'TextEdit', 'nome_rh': 'TextEdit', 'area_km': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'area_ha': 'TextEdit', 'areaha_tes': 'TextEdit', 'areakm2': 'TextEdit', 'auxiliary_': 'TextEdit', 'auxiliar_1': 'TextEdit', });
lyr_Municpios_5.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_CMLRFrentesManuais_6.set('fieldImages', {'RH': 'TextEdit', 'Município': 'TextEdit', 'Corpo Hídrico': 'TextEdit', 'Empresa': 'TextEdit', 'Classificação': 'TextEdit', 'Início': 'TextEdit', 'Status': 'TextEdit', 'Término': 'TextEdit', 'Antes': 'TextEdit', 'Durante': 'TextEdit', 'Depois': 'TextEdit', 'Coordena Y': 'TextEdit', 'Coordena X': 'TextEdit', });
lyr_COBRAPE_1.set('fieldLabels', {'ogc_fid': 'inline label - visible with data', 'objectid': 'inline label - visible with data', 'id': 'inline label - visible with data', 'rh': 'inline label - visible with data', 'nome_rh': 'inline label - visible with data', 'area_km': 'inline label - visible with data', 'shape_leng': 'inline label - visible with data', 'shape_area': 'inline label - visible with data', 'area_ha': 'inline label - visible with data', 'areaha_tes': 'inline label - visible with data', 'areakm2': 'inline label - visible with data', 'auxiliary_': 'inline label - visible with data', 'auxiliar_1': 'inline label - visible with data', });
lyr_BRASFORM_2.set('fieldLabels', {'ogc_fid': 'inline label - visible with data', 'objectid': 'inline label - visible with data', 'id': 'inline label - visible with data', 'rh': 'inline label - visible with data', 'nome_rh': 'inline label - visible with data', 'area_km': 'inline label - visible with data', 'shape_leng': 'inline label - visible with data', 'shape_area': 'inline label - visible with data', 'area_ha': 'inline label - visible with data', 'areaha_tes': 'inline label - visible with data', 'areakm2': 'inline label - visible with data', 'auxiliary_': 'inline label - visible with data', 'auxiliar_1': 'inline label - visible with data', });
lyr_R3Engenharia_3.set('fieldLabels', {'ogc_fid': 'inline label - visible with data', 'objectid': 'inline label - visible with data', 'id': 'inline label - visible with data', 'rh': 'inline label - visible with data', 'nome_rh': 'inline label - visible with data', 'area_km': 'inline label - visible with data', 'shape_leng': 'inline label - visible with data', 'shape_area': 'inline label - visible with data', 'area_ha': 'inline label - visible with data', 'areaha_tes': 'inline label - visible with data', 'areakm2': 'inline label - visible with data', 'auxiliary_': 'inline label - visible with data', 'auxiliar_1': 'inline label - visible with data', });
lyr_RTCEngenharia_4.set('fieldLabels', {'ogc_fid': 'inline label - visible with data', 'objectid': 'inline label - visible with data', 'id': 'inline label - visible with data', 'rh': 'inline label - visible with data', 'nome_rh': 'inline label - visible with data', 'area_km': 'inline label - visible with data', 'shape_leng': 'inline label - visible with data', 'shape_area': 'inline label - visible with data', 'area_ha': 'inline label - visible with data', 'areaha_tes': 'inline label - visible with data', 'areakm2': 'inline label - visible with data', 'auxiliary_': 'inline label - visible with data', 'auxiliar_1': 'inline label - visible with data', });
lyr_Municpios_5.set('fieldLabels', {'CD_MUN': 'inline label - visible with data', 'NM_MUN': 'inline label - visible with data', 'SIGLA_UF': 'inline label - visible with data', 'AREA_KM2': 'inline label - visible with data', });
lyr_CMLRFrentesManuais_6.set('fieldLabels', {'RH': 'inline label - visible with data', 'Município': 'inline label - visible with data', 'Corpo Hídrico': 'inline label - visible with data', 'Empresa': 'inline label - visible with data', 'Classificação': 'inline label - visible with data', 'Início': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Término': 'inline label - visible with data', 'Antes': 'inline label - visible with data', 'Durante': 'inline label - visible with data', 'Depois': 'inline label - visible with data', 'Coordena Y': 'inline label - visible with data', 'Coordena X': 'inline label - visible with data', });
lyr_CMLRFrentesManuais_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});