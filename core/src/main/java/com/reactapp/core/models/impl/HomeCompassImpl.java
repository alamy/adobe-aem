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

import com.adobe.acs.commons.models.injectors.annotation.ChildResourceFromRequest;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.adobe.cq.wcm.core.components.models.Image;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.reactapp.core.models.HomeCompass;
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
    HomeCompass.class,
    ComponentExporter.class
}, resourceType = "reactapp/components/home-compass")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class HomeCompassImpl
    implements HomeCompass
{

    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Image logoHome;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titleOne;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titleTwo;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titleThree;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titleFour;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String desciptionOne;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String desciptionTwo;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String desciptionThree;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String desciptionFour;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String textFooter;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("logoHome")
    public Image getLogoHome() {
        return logoHome;
    }

    @Override
    @JsonProperty("titleOne")
    public String getTitleOne() {
        return titleOne;
    }

    @Override
    @JsonProperty("titleTwo")
    public String getTitleTwo() {
        return titleTwo;
    }

    @Override
    @JsonProperty("titleThree")
    public String getTitleThree() {
        return titleThree;
    }

    @Override
    @JsonProperty("titleFour")
    public String getTitleFour() {
        return titleFour;
    }

    @Override
    @JsonProperty("desciptionOne")
    public String getDesciptionOne() {
        return desciptionOne;
    }

    @Override
    @JsonProperty("desciptionTwo")
    public String getDesciptionTwo() {
        return desciptionTwo;
    }

    @Override
    @JsonProperty("desciptionThree")
    public String getDesciptionThree() {
        return desciptionThree;
    }

    @Override
    @JsonProperty("desciptionFour")
    public String getDesciptionFour() {
        return desciptionFour;
    }

    @Override
    @JsonProperty("textFooter")
    public String getTextFooter() {
        return textFooter;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
