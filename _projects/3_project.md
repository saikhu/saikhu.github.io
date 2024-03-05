---
layout: page
title: Automated Classification Toolkit for Medical Imaging Researchers
description: 
img: assets/img/projects/p_3/cover.jpg
importance: 2
category: work
giscus_comments: false
date: 2023-12-07
---

This project develops a comprehensive toolbox for applying machine learning algorithms to medical imaging, facilitating advanced analysis and predictions across various medical imaging datasets.

Machine learning plays a crucial role in the field of digital image processing, particularly within the medical domain. This project introduces a toolbox designed to assist researchers in applying different machine learning algorithms on medical images, enabling predictions and analysis across diverse medical image datasets.

With the absence of a GUI tool for applying machine learning techniques to medical images, this project aims to fill this gap by providing a toolkit for preprocessing, feature extraction, training, testing classifiers, and achieving results. It supports loading various datasets and applying multiple technique combinations to medical imaging datasets.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/projects/p_3/cap.png" title="Segmentation Results" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    User interface of the MATLAB App.
</div>

The toolkit encompasses several key functionalities:

- **Data Loading:** Allows users to select datasets stored on their devices, providing insights into the total number of instances and classes within the dataset.
- **Preprocessing:** Implements various filtering and segmentation techniques, such as Gaussian, Sobel, and Canny filtering, along with K-Means and Otsu segmentation.
- **Feature Extraction:** Extracts both handcrafted features (e.g., HOG and LBP features) and deep neural network features (e.g., AlexNet and ResNet features).
- **Training and Testing:** Facilitates training of models selected by the user and evaluates their accuracy.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/projects/p_3/cap1.png" title="Preprocessing page" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Preprocessing page of the Application.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/projects/p_3/cap2.png" title="Feature engineering page of the Application" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Feature engineering page of the Application.
</div>


## Conclusion

The Automated Classification Toolkit for Medical Imaging Researchers stands as a significant advancement for researchers in the medical imaging field, providing a robust platform for applying machine learning algorithms to medical images.


Check out the presentation for more details:
<iframe src="https://docs.google.com/presentation/d/1M-ofhUlYhhQ_HYaiG1UGCCggnWq55ZD8/edit?usp=sharing&ouid=114836757344491497331&rtpof=true&sd=true" frameborder="0" width="780" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>