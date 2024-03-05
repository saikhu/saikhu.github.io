---
layout: page
title: Active Contour Model for Image Segmentation
description: This project extends to research article publication.
img: assets/img/projects/p_2/cover.jpg
importance: 7
category: work
giscus_comments: false
related_publications: asim2021active
date: 2021-08-22 # Add this line to include a date
---

This work was supported by the National Research Foundation of Korea (NRF) grant funded by the Korea government Ministry of Science and Information Technology (MSIT) (No. 2019R1F1A106261213) and the Chung-Ang University Young Scientist Scholarship 2020.

## Abstract

ACMs have been shown to be highly suitable for image segmentation tasks. This paper introduces a novel active contour model with a local dilated convolution filter (ACLD), offering improved segmentation with less computational time. The ACLD model demonstrates superior performance on both synthetic and natural images, as well as on the ISIC2017 dataset for medical image segmentation.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/projects/p_2/chart.png" title="Segmentation Results" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The segmentation results on the ISIC2018 dataset: (a) the segmentation result of Local Image Fitting (LIF) model, (b) LSACM, (c) GLSEPF,  (d) Proposed model (ACLD), and (e) shows the Human annotated binary mask of the given images.
The green outline shows the true condition of the original cancer area, while the red outline shows the segmentation results of the ACM models, and blue outline shows the initial contour.
</div>

## Proposed Model

The ACLD model integrates local image information through a signed pressure force function and uses a Gaussian kernel applied via dilated convolution for regularizing the level set formulation. This approach automatically stops at the object boundaries, enhancing segmentation accuracy and efficiency.

### Key Features

- **Local Dilated Convolution Filter**: Enhances local region-based model performance.
- **Automatic Stopping Conditions**: Precisely stops the contour at the object boundaries.
- **Efficient Segmentation**: Offers less computational time and higher accuracy.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/projects/p_2/cancer_04.png" title="Segmentation Results" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The segmentation results on the ISIC2018 dataset: (a) the segmentation result of Local Image Fitting (LIF) model, (b) LSACM, (c) GLSEPF,  (d) Proposed model (ACLD), and (e) shows the Human annotated binary mask of the given images.
The green outline shows the true condition of the original cancer area, while the red outline shows the segmentation results of the ACM models, and blue outline shows the initial contour.
</div>


### Contributions

- Introduced a novel ACM for robust image segmentation.
- Demonstrated the model's effectiveness on various datasets.
- Provided a comprehensive comparison with state-of-the-art models.

For more details on the model formulation, implementation, and results, please refer to our publication in the [IEEE Access](https://ieeexplore.ieee.org/document/9656758).

