/*
 * ***********************************************************************
 * React App CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 React App.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of React App and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to React App
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from React App.
 * ***********************************************************************
 */

package com.reactapp.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.reactapp.core.models.DetalheCompass;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    DetalheCompass.class,
    ComponentExporter.class
}, resourceType = "reactapp/components/detalhe-compass")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class DetalheCompassImpl
    implements DetalheCompass
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String textoRepositorio;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String textoFavorito;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String textoDetalhes;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("textoRepositorio")
    public String getTextoRepositorio() {
        return textoRepositorio;
    }

    @Override
    @JsonProperty("textoFavorito")
    public String getTextoFavorito() {
        return textoFavorito;
    }

    @Override
    @JsonProperty("textoDetalhes")
    public String getTextoDetalhes() {
        return textoDetalhes;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
