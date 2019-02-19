---
title: Real estate forecasting with Zillow Research
date: "2019-01-27T12:00:00.000Z"
template: "post"
draft: false
slug: "/blog/real-estate-prices-regression-with-scikit-learn"
img: "https://www.visualcapitalist.com/wp-content/uploads/2018/12/us-real-estate-prices.jpg"
category: "Data Science"
tags:
  - "Python"
  - "Regression"
  - "Machine Learning"
  - "scikit-learn"
description: "Analysis of various regression models for forecasting real estate pricing data in sklearn."
canonical: "https://davidcgong.com"
---

>Disclaimer: If you were expecting a super complicated analysis, sorry! The data I use for this specific research is univariate.

![Don't you hate it when real estate prices rise faster than wages?](https://www.visualcapitalist.com/wp-content/uploads/2018/12/us-real-estate-prices.jpg)

Forecasting has become prevalent in the world of data science. In this blog post, I will be going over how to forecast real estate values using regression techniques in [scikit-learn](https://scikit-learn.org/), an extremely popular machine learning library for Python known for its simplicity and multi-faceted features.

In addition to simply forecasting the market, we will also compare the performances between different types of regression, such as random forest, linear, lasso, and Elastic Net.

## Getting started by finding a reliable dataset

Data is king in machine learning. Thus, the first step is to ensure we obtain data that is high in reliability, and high in volume. Without reliability, the model becomes inaccurate in of itself, and without volume, overfitting becomes more likely to occur.

As a result, for this specific case, I decided to use data from [Zillow Research](https://www.zillow.com/research/). With all the different types of data, there are bound to be varying dimentionalities (such as # bedrooms, # bathrooms, counties, states, etc.) to draw conclusions from.

For simplicity's sake, I used the ZHVI (Zillow Home Value Index) All Homes - Top Tier Time Series with States data, turning this into a simple one-dimensional problem by only using the monthly median pricing data of top tier homes in each state.

[Download data here](http://files.zillowstatic.com/research/public/State/State_Zhvi_TopTier.csv)

## Tools, libraries, and frameworks to use

Python has become the universal language for Machine Learning and data analysis, with libraries & frameworks such as TensorFlow, Keras, scikit-learn, PyTorch, and more becoming widely popular.

Due to the nature and simplicity of the problem that is trying to be better understood, scikit-learn is "best suited" for this case, and matplotlib will be used for data visualization.

## Installing frameworks and tools

Since we are using Python, we can use [pip](https://pypi.org/project/pip/) to install these packages. If you would like to find a tutorial on how to assign Python to your environment variables, there are some tutorials online you can follow before proceeding.

Run this command in either your command prompt or Anaconda prompt:

`pip install scikit-learn pandas numpy matplotlib`

## Determining approach

Without a doubt, for this specific problem and given the data, supervised learning or function approximation is the way to go.

![](https://scikit-learn.org/stable/_static/ml_map.png)

What about regression versus classification? Well, rather than classifying what is right versus wrong, we are trying to make a prediction about the price of home values in the future. Thus, regression is probably the best (not the only) approach to this problem.

## Data overview and goal

The data represents monthly median top-tier house values for each state (1996/04 - 2019/12).

Our goal in this case is to predict the growth or decay of prices in each state, which can differ significantly. It can be expected that housing in the coastal areas will see a sharp growth in prices over the next two decades as people flock to the cities, while housing in the midwest will see steady decay or stagnant growth as demand lowers and supply remains the same/rises.

Given the low amount of features, dimensions, and volume from the data:

1.  [Overfitting](https://www.investopedia.com/terms/o/overfitting.asp) is probably going to happen. Actually, it will happen.
2.  Stochastic gradient descent regression would be ineffective due to the low data volume. Instead, Lasso, Elastic Net, Linear, and Random Forest regression would be better for understanding the data.

## Importing libraries
```python
  import pandas as pd
  import numpy as np
  import matplotlib.pyplot as plt

  from collections import defaultdict
  from sklearn import svm
  from sklearn.metrics import accuracy_score
  from sklearn import preprocessing, model_selection, svm
  from sklearn.ensemble import RandomForestRegressor
  from sklearn.linear_model import LinearRegression, LassoCV, ElasticNet, ElasticNetCV
  from sklearn.neighbors import KNeighborsRegressor
  from sklearn.model_selection import cross_val_score
```

After importing the necessary libraries needed for this task, we also need to set up the dataframe for pandas and split the data into training and testing data.

## Setting up pandas dataframe and splitting data

In this case, the pandas dataframe is perfect for reading the csv file and creating a way to easily access data.

Since I'm not yet 100% familiar with manipulating the pandas dataframe, I accessed the data and added them to dictionaries and arrays and then rearranged them with NumPy later on for fitting.

Also, I renamed the csv file to `state_top_data.csv` prior to performing any operations.

```python

    file_to_read = "state_top_data.csv"
    df = pd.read_csv(file_to_read)
    df.head()

```

The next step is figuring out what to do with the dataframe.

## Reading in a state input

After loading the data into the dataframe, rather than re-assigning a rather large dictionary manually through iterating every row and column in the dataframe, the `.tolist()` and `.to_dict()` come in handy here.

In addition, since we want to only look at one state at a time (even though there is not a lot of data), we can also ask for user input and to match the key with a dictionary.

```python

    #useful for X for our regressor for indexing
      count = 0
      date_list = []
      for i in range(0, len(df.columns)-3):
          date_list.append(i)

      #Get x-ticker for matplotlib
      X_vals = df.columns.values[3:len(df.columns)].tolist()

      valid_state = False
      total_entries = len(df.columns)

      region_list = df['RegionName']
      region_list = region_list[0: len(region_list)].to_dict()
      region_list = {v: k for k, v in region_list.items()}

      while valid_state == False:
          try:
              state_input = input("Please enter the state for which you would like to see housing data (full name i.e. California, New York, Georgia, etc.): ")
              state_id = region_list[state_input]
              valid_state = True
          except KeyError:
              print("Invalid state. Please make sure punctuations and spellings are correct.")

```

## Splitting data between training and test data

Splitting the data can be tricky, especially with low amounts of data. In this case, having too much training data guarantees overfitting since we simply do not have enough data and thus cannot make a definitive conclusion.

In this case, I opted for 85% testing and 15% training primarily due to the low volume of data and to avoid overfitting.

```python

    #includes all the pricing data for the state from 1996-04 to Present        
    state_val_list = df.iloc[state_id, 3:len(df.columns)].values.tolist()

    X = date_list
    X = np.array(X)
    X = X.reshape(-1, 1)
    y = df.iloc[state_id, 3:len(df.columns)]
    #Split for training and testing
    X_train, X_test, y_train, y_test = model_selection.train_test_split(X, y, test_size = 0.85)

```

X is simply an array that is `[0 ... len(df.columns]` which serves as the X domain and y is our data across all the columns for a specific state (i.e. California, Georgia, etc.).

## Predictions

Now, that we have properly split up the data, we can run predictions on it after fitting it to our model. In this example, we will use `ElasticNetCV()`, which does its own cross-validation and determination of penalties for our model.

```python

    #------------Elastic Net Regression----------------
    regressor = ElasticNetCV()
    regressor.fit(X_train, y_train)
    predictions = regressor.predict(X)

```

## Wrapping up with metrics and visualization with matplotlib

Since we are going to end up drawing multiple graphs to visualize the differences between each regression method and predictions, we can create a function.


```python
    # This function prints out the metrics and does predictions and draws them out on matplotlib
def graph_metrics(regressor, predictions, X, state_val_list, state_id, regressionType):

  y_pred = regressor.predict(len(X)+12)

  #get metrics (predicted value a year from now, r^2 score, MAE, and Forecast percentage change)

  #percentage_change is getting the percentage difference between the predicted value and the most recent value, and then rounded to 3 decimal places.
  #this lets us calculate the forecast percentage change over a year
  percentage_change = round(((y_pred[0] / predictions[len(state_val_list) - 1]) - 1.00) * 100, 3)
  r2_score = regressor.score(X_test, y_test)
  mae_score = model_selection.cross_val_score(regressor, X, y, scoring='neg_mean_absolute_error')
  print("y_pred: ", y_pred)
  print("R^2 Score: ", r2_score)
  print("Mean Absolute Error: ",mae_score.mean())
  print("Forecast percentage change for next year: ", percentage_change)
  X_Grid = np.arange(min(X), max(X), 0.01)
  X_Grid = X_Grid.reshape((len(X_Grid), 1))

  #plotting out the graph on matplotlib
  plt.plot(X_vals, state_val_list, label="True")
  plt.plot(X_Grid, regressor.predict(X_Grid), color = 'orange', label='Predictions')
  plt.scatter(X_train, y_train, color='red', label='Selected training points')
  plt.legend(prop={'size':8})
  plt.xticks(np.arange(0, len(df.columns), step = 65))
  plt.axis('auto')
  plt.title(regressionType + " (" + state_input +")")
  plt.xlabel('Months since 1996-04')
  plt.ylabel('Price ($)')
  plt.show()

  graph_metrics(regressor, predictions, X, state_val_list, state_id, "ElasticNetCV")
```

With that, we have taken the steps necessary to run and visualize our model. Now, we will be looking at the differences between each type of regression.

Right before we get into the analysis, it would also be helpful to point out that Zillow Research also has some forecasts for housing values. We will be looking at California specifically, in which the Zillow Home Value Forecast predicted this at the time of writing this article:

- California: <span style="color: #28a745">+7.26% growth by 2020</span>

[Download Zillow Home Value Forecast data](http://files.zillowstatic.com/research/public/AllRegionsForePublic.csv)

We will see if the forecasts match this percentage.

## Elastic Net CV

We'll first look at Elastic Net regression for this problem, a widely renowned regression method that seeks to solve the disadvantages of lasso and ridge regression.

![](/media/zillow-regression/elastic_net_cv.png)

### Metrics

*   y_pred: [768764.03926894]
*   R<sup>2</sup> Score: 0.351341762336967
*   Mean Absolute Error: -211905.6268781329
*   Forecast percentage change for next year: <span style="color: #28a745">+1.11%</span>

### Analysis

From the cross-validation penalties that scikit-learn gave to the model, it becomes apparent that the model actually heavily penalized the feature (the only one), which is the median pricing values for the state of California. As a result, the model did not fit very well and the MAE is high.

We can thus conclude that unless there were more features in the data, **Elastic Net would not be a good way to forecast the data**, though the other regression methods do not do so well either.

## Lasso Regression

[Lasso regression](https://en.wikipedia.org/wiki/Lasso_(statistics)) is another form of regression that we can look at for this problem. We also use the cross-validated version of Lasso for this problem.

![](/media/zillow-regression/lasso_cv.png)

### Metrics

*   y_pred: [942006.92683974]
*   R<sup>2</sup> Score: 0.712193542487475
*   Mean Absolute Error: -197577.97986332726
*   Forecast percentage change for next year: <span style="color: #28a745">+2.569%</span>

### Analysis

Lasso's cross-validation from scikit-learn did not heavily penalize the feature coefficient in this case. As a result, as will be seen in the next model, this closely matches the linear regression model. The model also fits the data decently.

The forecast still falls quite short of Zillow's Home Value Forecast.

## Linear Regression

Simplest form of regression, but is pretty accurate at predicting trends if you gave it 50+ years. Just maybe.

![](/media/zillow-regression/linear_regression.png)

### Metrics

*   y_pred: [947945.52975428]
*   R<sup>2</sup> Score: 0.717735173479749
*   Mean Absolute Error: -159808.97743160906
*   Forecast percentage change for next year: <span style="color: #28a745">+2.61%</span>

### Analysis

Linear regression in general is decent at catching nonvolatile trends over long periods of time. However, if we are trying to predict properly a year from now, we definitely cannot rely on linear regression. Though, the model in this case somewhat fits the data.

The forecast also falls quite short of Zillow's Home Value Forecast.

## Random Forest Regression

This form of regression is best suited for accurately fitting the model and for making intermediate predictions. As a result, this regression method actually won't be forecasting, and for this specific problem is a little bit useless. Regardless, it wouldn't hurt to give it a try.

![](/media/zillow-regression/random_forest.png)

### Metrics

*   y_pred: [971880.]
*   R<sup>2</sup> Score: 0.9761418458917912
*   Mean Absolute Error: -181458.02197802198
*   Forecast percentage change for next year: 0.0%

### Analysis

The model fits very well with the data in this case. With the construction of multiple decision trees for the training data, the model was able to properly train itself in every case. If we were to apply the same tactic with k-neighbors, then we would also get a very similar looking graph.

The only downfall of this method is that this type of regression was not made for time-series forecasting in general.

## Is regression just useless?

As you can see, the regression methods weren't useful at all when it came to making accurate forecasting. Here are a few things to think about, and a possible way of making a slightly more accurate forecast that's even simpler than above. Though, things always change.

## Food for thought

The real estate markets are affected by external factors, as can be especially seen in 2008\. While the above regression methods may predict accurately 50+ years into the future, it is hard to predict the trend for next year.

As a result, it would maybe be a better idea to apply an [LSTM](https://en.wikipedia.org/wiki/Long_short-term_memory) model. I will be implementing a method at some point in the future and make a blog post about it in the future.

For this case, what if we applied linear regression to the last 12 months? Would we be able to get an "accurate" forecast for next year, and would it match closely with that of the forecast of Zillow Home Value Index? Let's find out.

## Applying linear regression over the last 12 months

```python
anX = a
anX = np.array(anX)
anX = anX.reshape(-1, 1)
aY = df.iloc[state_id, len(df.columns)-12:len(df.columns)]
regressor = LinearRegression()
regressor.fit(anX, aY)
predictions = regressor.predict(anX)
y_pred = regressor.predict(len(anX) + 12)
percentage_change = round(((y_pred[0] / predictions[len(anX) - 1]) - 1.00) * 100, 3)
print(predictions)
print("Forecast percentage change for next year: ", percentage_change)
```

After running this model, we get that the forecasted change for California by 2020 is <span style="color: #28a745">+7.418%</span>. This is very similar to Zillow's Home Value Forecast for California, which was +7.26%.

Here are some other numbers:

*   1\. Georgia: <span style="color: #28a745">+6.47%</span> (ZHVF: +6.59%)
*   2\. New York <span style="color: #28a745">+4.27%</span> (ZHVF: +3.31%)
*   3\. Florida <span style="color: #28a745">+4.64%</span> (ZHVF: +4.87%)
*   4\. Washington <span style="color: #28a745">+2.984%</span> (ZHVF: +5.23%)

Not bad!

However, external factors still exist and the health of the economy can greatly impact the market, so this definitely should be taken for granted. In this instance, many companies are flocking to Seattle and the overall sentiment for moving to Washington has been growing due to the growth of companies such as Amazon and Microsoft. A simple linear regression would not be able to capture these changes.

## Conclusion

We probably need to add more relevant features to the data and get more data if we are to make any insightful predictions. Factoring in the overall sentiment and getting data on where Americans are moving to would most likely be the single biggest factor in growth or decay for properties in individual state.

In conclusion, regression forecasting may not necessarily be a bad method if we are going for long-term, but for measuring short-term changes, probably not the best.

My next blog post will be going over one of my trading strategies which incorporates [mean reversion](https://www.investopedia.com/terms/m/meanreversion.asp).

***