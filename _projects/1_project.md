---
layout: page
title: Cloud Native Alzheimer's Disease Detection App
description: Cloud Native Alzheimer's Disease Detection App
img: assets/img/projects/p_1/p_1.png
importance: 1
category: work
date: 2022-05-01
related_publications: emmamuel20223dcnn, einstein1950meaning
---

Developed and deployed a cloud-native, containerized application specifically designed for the accurate classification of Alzheimer's Disease. Utilized the application using a state-of-the-art 3D CNN model trained on 3D Brain Magnetic Resonance Images, delivering reliable and precise results.



    
    The Brain is awesome to play with.
    
---


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/projects/p_1/project_app_1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/projects/p_1/project_app_2.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/projects/p_1/project_app_3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The images shows the App UI, in the first stage the user have to register, and after registration the user can upload the MRI scan in app, the 3D scan MRI will sent to cloud server. Firstly the server convert the images into NIFTI format, segment the Hippocampus and then classify either the scan has the Alzheimer's Disease or not. 
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/projects/p_1/project_pipeline_1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This figure shows the overall prediction pipeline for the Alzheimer's Disease classification.
</div>

We also wrote a article about that project the *Abstract* is given below.

<section id="abstract" class="mt-5">
    <div class="container">
        <h2 class="section-title">Abstract</h2>
        <p class="abstract-content">
            The application of deep learning algorithms to the diagnosis of neuropathic diseases like Alzheimer's Disease (AD) is gaining traction. This paper elaborates on a 3D-CNN (3D-convolutional neural network) network-based method for predicting hippocampal atrophy by leveraging deep learning on MRI scans of Alzheimer’s disease-related patients. The methodology includes the HippMapp3r algorithm for MRI segmentation and the EfficientNet tool for AD determination, enhanced by the proposed Shifted Patch Tokenization (SPT) method to improve diagnostic accuracy. Our framework demonstrates high efficacy in AD diagnosis, achieving 94% and 96% accuracy in training and test sets, respectively.
        </p>
        <p class="keywords"><strong>Keywords:</strong> Alzheimer’s Disease, Shifted Patch Tokenization, Convolutional Neural Network, Hippocampus Image Classification</p>
    </div>
</section>

---
