---
slug: beginners-guide-to-kaggle
title: Beginner's Guide to Kaggle Competitions
date: 2019-03-06T02:38:23.251Z
description: The three main things to know for getting a higher score on Kaggle competitions.
tags:
  - Data Science
  - Machine Learning
headerImage: 'http://static1.squarespace.com/static/56f31e1745bf21a9d5220d2e/583c89ec6a49631ee35b5a01/5a95f7a6419202d2af94ee36/1519934676684/KAGGLE+hUB101.png?format=1500w'
templateKey: blog-post
---

>[Kaggle](https://kaggle.com) is an online community of data scientists and machine learners, owned by Google LLC. Users can find datasets and participate in competitions for prizes and more importantly, for experience!

Check out my [Kaggle profile](https://kaggle.com/davidcgong)!

![Kaggle](data:image/png;base64,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)

## What is Kaggle?

While attempting to gain a better understanding about the world of data science, I came around one platform that served as an extremely insightful tool named Kaggle. On Kaggle, one can find datasets, participate in competitions, and connect with other data scientists and share knowledge.

I chose to delve into learning about Kaggle competitions to learn about what worked, what doesn't, and how it would be applicable in real life situations. Surprisingly, I was able to place within the top 15% of competition for some competitions (Microsoft Malware Prediction and Elo Merchant Category Recommendation) even as a beginner.

## Kaggle competitions?

To simply put it, anyone can participate in a Kaggle competition, in which you are given an overview of the problem along with datasets. It is then entirely up to you to determine how to make use of these datasets and determine the problem in your way. 

Of course, often times you will find many kernels and discussions that will help you start out with a problem.

When submitting predictions prior to the competition deadline, you will receive an initial score based on the performance of your predictions with the current set of training data. 

The final score you obtain may be used against future data, against the rest of the training data, and such.

## Producing accurate results in general

![A guideline for generating a successful model](https://elitedatascience.com/wp-content/uploads/2018/05/What-Goes-Into-a-Successful-Model.jpg)

Algorithm selection in my opinion should take a little bit more precedence than 'other', but the key takeaway is that this diagram just shows that having one flaw when producing a model can generate substandard and undesired results.


## Three things to think about

When it comes to deciding the approach to doing well on Kaggle competitions, there are probably three basic, fundamental ideas to consider outside of EDA (exploratory data analysis).

### 1) Algorithm selection (Boosting, neural networks?)

For most competitions and datasets that involve some form of supervised learning, typically the best approach is to use gradient boosting. **In particular, Kagglers are heavily biased towards using [XGBoost](https://xgboost.readthedocs.io/en/latest/) and [LightGBM](https://lightgbm.readthedocs.io/en/latest/)**. 

Other ideas such as neural networks may work as well. Standalone decision trees on the other hand, well maybe not so much when it comes to accuracy. Kaggle doesn't care about performance, but only cares about accuracy.

**Blending is also a popular technique used by many Kagglers**, which essentially combines many test results using various algorithms (and hyperparameters) through calculating the mean or using a specified weight for determining values.

That said, there are also various other problems that require different solutions. For example, you might consider a convolutional neural network for an image classification problem as the previous algorithms either don't work as well or are just incompatible.

### 2) Feature engineering

>Feature engineering is the process of using domain knowledge of the data to create features that make machine learning algorithms work. Feature engineering is fundamental to the application of machine learning, and is both difficult and expensive. -Wikipedia

A lot of times you are thrown a bunch of features and categories that you have to determine that are worth to be relevant or not. Many times, the training dataset that is given to you often only has a few features. Running an algorithm on that dataset probably wouldn't get you very far in terms of accuracy.

**Learning to rank features by importance and merging them with the training dataset is ultimately what will separate the Kaggle competition expert from the beginner.** Afterwards, it comes down to understanding the problem and adjusting hyperparameters. 

### 3) Cloud computing

Depending on the size of the dataset, the competition problem, and the way you constructed your model (feature engineering), your model may take anywhere from 30 minutes to a day (maybe even days) to train and generate predictions. 

In many cases, running models on the Kaggle kernel is enough to solve this problem. Your model trains offline on Kaggle's server, which is perfect for the busy student who is just tuning hyperparameters on a model that takes more than 20 hours to run! _Not talking about me by the way..._

A few other options would be to employ AWS instances to quickly deploy a machine learning model, which can often be faster and less cost-expensive than utilizing your own GPU and RAM.

Overall, however, I would recommend just sticking with the kernel and learning about the various approaches to competition problems and feature engineering as mentioned above.

## Closing thoughts

To be honest, the only thing you need to know from this blog post is this:

**XGBoost, LightGBM, and feature engineering are meta.** 