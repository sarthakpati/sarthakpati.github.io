---
layout: post
title: New publication at NeuroImage
date: 2025-02-15 16:11:00-0400
inline: false
related_posts: false
---

We are excited to announce our new publication in NeuroImage. The paper is titled "Adapting to evolving MRI data: A transfer learning approach for Alzheimer’s disease prediction" and is available [here](https://doi.org/10.1016/j.neuroimage.2025.121016).

---

## Abstract

Integrating 3D magnetic resonance imaging (MRI) with machine learning has shown promising results in healthcare, especially in detecting Alzheimer’s Disease (AD). However, changes in MRI technologies and acquisition protocols often yield limited data, leading to potential overfitting. This study explores Transfer Learning (TL) approaches to enhance AD diagnosis using a Baseline model consisting of a 3D-Convolutional Neural Network trained on 80 3T MRI scans.

Two scenarios are explored: (A) utilizing historical data to address changes in MRI acquisitions (from 1.5T to 3T MRI), and (B) adapting 2D models pre-trained on ImageNet (ResNet18, ResNet50, ResNet101) for 3D image processing when historical data is unavailable. In both scenarios, two modeling approaches are tested. The General Approach involves distinct feature extraction and classification steps, using Radiomic features and TL-based features evaluated with six classifiers. The Deep Approach integrates these steps by fine-tuning the pre-trained models for AD diagnosis.

In scenario (A), TL significantly boosts the Baseline’s accuracy from 63% to 99%. In scenario (B), Radiomic features better represents 3D MRI than TL-features in the General Approach. Nonetheless, fine-tuning models pre-trained on natural images can increase the Baseline’s accuracy by up to 12 percentage points, achieving an overall accuracy of 83%.
