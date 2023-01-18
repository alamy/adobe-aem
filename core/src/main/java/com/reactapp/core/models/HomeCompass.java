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

package com.reactapp.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.wcm.core.components.models.Image;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code HomeCompass} Sling Model used for the {@code reactapp/components/home-compass} component.
 * 
 */
@ConsumerType
public interface HomeCompass
    extends ComponentExporter
{


    @JsonProperty("logoHome")
    Image getLogoHome();

    @JsonProperty("titleOne")
    String getTitleOne();

    @JsonProperty("titleTwo")
    String getTitleTwo();

    @JsonProperty("titleThree")
    String getTitleThree();

    @JsonProperty("titleFour")
    String getTitleFour();

    @JsonProperty("desciptionOne")
    String getDesciptionOne();

    @JsonProperty("desciptionTwo")
    String getDesciptionTwo();

    @JsonProperty("desciptionThree")
    String getDesciptionThree();

    @JsonProperty("desciptionFour")
    String getDesciptionFour();

    @JsonProperty("textFooter")
    String getTextFooter();

}
