---
layout: page
title: Cloud-Native Alzheimer's Disease Detection
description: 3D brain MRI classification app using a 3D CNN, cloud deployment, and medical-device submission workflow.
img: assets/img/projects/p_1/p_1.png
importance: 2
category: work
date: 2022-05-05
related_publications: emmamuel20223dcnn
---

Built a cloud-native medical imaging application for Alzheimer's disease classification from 3D brain MRI. The system converted uploaded scans into the required imaging format, segmented hippocampus regions, and ran a 3D CNN-based classifier in a containerized server workflow.

## Role

- Developed the application workflow for MRI upload, preprocessing, segmentation, and classification.
- Containerized the service for cloud deployment and reproducible inference.
- Supported the Korea MFDS medical-device registration submission under PIPA requirements.
- Connected the engineering work to a peer-reviewed publication on MRI-based Alzheimer's diagnosis.

## Technical Scope

- **Domain:** 3D brain MRI, Alzheimer's disease classification, hippocampus analysis.
- **Modeling:** 3D CNN classification pipeline with segmented hippocampus inputs.
- **Deployment:** Cloud-native application workflow with containerized processing.
- **Compliance context:** Korea MFDS submission and Personal Information Protection Act (PIPA) handling requirements.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/projects/p_1/project_app_1.jpg" title="Registration screen" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/projects/p_1/project_app_2.jpg" title="MRI upload screen" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/projects/p_1/project_app_3.jpg" title="Prediction screen" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Application flow: user registration, MRI scan upload, cloud-side preprocessing, hippocampus segmentation, and Alzheimer's disease classification.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/projects/p_1/project_pipeline_1.png" title="Alzheimer's disease classification pipeline" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Prediction pipeline for 3D brain MRI processing and Alzheimer's disease classification.
</div>

## Publication Abstract

The related publication presents a 3D CNN method for Alzheimer's disease diagnosis using segmented hippocampus MRI. The framework reports 94% training accuracy and 96% test accuracy, with Shifted Patch Tokenization used to improve diagnostic performance.
