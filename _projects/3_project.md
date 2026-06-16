---
layout: page
title: Medical Imaging Classification Toolkit
description: MATLAB toolkit for preprocessing, feature extraction, training, and comparing ML models on medical images.
img: assets/img/projects/p_3/cover.jpg
importance: 5
category: work
giscus_comments: false
date: 2019-06-09
---

Built a MATLAB application for medical imaging researchers who needed a repeatable way to load image datasets, preprocess scans, extract features, train classifiers, and compare model performance.

## Role

- Designed the GUI workflow for dataset loading, preprocessing, feature extraction, model training, and evaluation.
- Implemented classical image-processing filters and segmentation options.
- Added handcrafted and deep-feature extraction paths for model comparison.
- Delivered the project as a final-year undergraduate capstone.

## Technical Scope

- **Preprocessing:** Gaussian, Sobel, Canny, K-Means, and Otsu-based image operations.
- **Features:** Handcrafted descriptors such as HOG and LBP, plus deep features from models such as AlexNet and ResNet.
- **Evaluation:** Classifier training, testing, and comparative performance reporting.
- **Stack:** MATLAB.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/projects/p_3/cap.png" title="Toolkit main interface" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Main interface for selecting datasets and running medical image classification experiments.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/projects/p_3/cap1.png" title="Preprocessing page" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Preprocessing page for image filtering and segmentation operations.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/projects/p_3/cap2.png" title="Feature extraction page" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Feature extraction page for handcrafted and neural-network-derived features.
</div>

<iframe src="https://docs.google.com/presentation/d/1M-ofhUlYhhQ_HYaiG1UGCCggnWq55ZD8/edit?usp=sharing&ouid=114836757344491497331&rtpof=true&sd=true" frameborder="0" width="780" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
