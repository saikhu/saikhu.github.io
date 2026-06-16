---
layout: page
title: Active Contour Model for Image Segmentation
description: IEEE Access research on robust segmentation using active contours and dilated convolution.
img: assets/img/projects/p_2/cover.jpg
importance: 4
category: work
giscus_comments: false
related_publications: asim2021active
date: 2021-08-22
---

Developed a segmentation method that combines active contour modeling with a local dilated convolution filter. The work targets inhomogeneous images where boundaries are difficult to separate with standard region-based segmentation methods.

This research was supported by the National Research Foundation of Korea and the Chung-Ang University Young Scientist Scholarship.

## Contribution

- Proposed the Active Contour Model with Local Dilated Convolution Filter (ACLD).
- Improved boundary stopping behavior through local image information and a signed pressure force formulation.
- Evaluated the method on synthetic, natural, and medical image segmentation datasets.
- Published the work in IEEE Access.

## Technical Scope

- **Methods:** Active contour models, level-set formulation, dilated convolution, region-based segmentation.
- **Domain:** Medical and natural image segmentation.
- **Evaluation:** Qualitative and quantitative comparison against established active contour baselines.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/projects/p_2/chart.png" title="Segmentation comparison" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Segmentation comparison across active contour methods. The green outline marks the reference region, red marks model output, and blue marks the initial contour.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/projects/p_2/cancer_04.png" title="Medical image segmentation result" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Example segmentation result on a medical image sample.
</div>

For details, see the IEEE Access paper: [Active Contour Model for Image Segmentation with Dilated Convolution Filter](https://ieeexplore.ieee.org/document/9656758).
