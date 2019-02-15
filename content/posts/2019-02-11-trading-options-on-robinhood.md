---
title: Trading Options, Part 1
date: "2019-02-11T12:00:00.000Z"
template: "post"
draft: false
slug: "/blog/trading-options-on-robinhood-part-1"
img: "/media/xkcd-290.png"
category: "Finance"
tags:
  - "Options"
  - "Natural Language Processing"
  - "Machine Learning"
  - "scikit-learn"
description: "An eye-opening experience with Options trading on Robinhood"
---

>Robinhood is an investing and trading application that does not require to pay any commissions. If you are new to Robinhood and would like to give it a try, click on my [referral link](https://share.robinhood.com/davidg3685) here! You and I will both get a share of a stock.

![Robinhood, a millenial's life-saver when it comes to investing. And dare I say it, trading!](https://d1qb2nb5cznatu.cloudfront.net/startups/i/227792-c28dd8f90d35010d984fdb5c0756034e-medium_jpg.jpg?buster=1543696028)

A democratization of the entire investing industry, [Robinhood](https://robinhood.com) is definitely one of the best applications I have come across in terms of investing. As a college student looking to get his feet wet with investing, Robinhood was the perfect application for me to start my venture.
>Spoiler alert: Things have been going pretty decently and I've learned a lot!

I do want to attribute some of my success, however to luck. I made a few earning call plays when it came to options and I made a significant amount of money off of some good "bets", albeit without sacrificing too much of my account value.

In order to reduce financial risk, I started off with $1,400 (added $400 again at some point), and within one month of doing options trading was able to raise that value to $2,850 while minimizing 30% exposure of the account value for options trading.
![1-month growth of small account](/media/robinhood-options-part1/current_progress.PNG) 

This would be a lot if I had a bigger account, but as I'm starting off with a small sum of money, this is perfectly fine.

But before we get into any of the trades that occurred and some of the things I have learned, here are a few key important attitudes that I have developed through experience:

*   As a trader, you are only right for so long. In other words, **when a reasonable return is presented, take it**. Factoring in theta/time decay and consolidations in stock pricing, it is important to not be too greedy.
*   Be patient. Taking in small profits and not willing to cut losses ultimately leads to a net loss over time. **Riding the bull is very profitable, but be ready to cash in when consolidation starts**. What comes up must come down!
*   Naked calls and puts are okay, but **for lower-risk plays with decent returns, strategies such as straddles, strangles, spreads, and iron condors are much better for overall account growth over time.**
*   Probability is the name of the game. **Think of how likely a stock will continue an upward trend and when it will need to go through consolidation**. Reading up on news and observing moving average candlesticks are effective here.

I'll go over these four points based on some anecdotes and how I lost the potential for a lot of money while also losing some money. 

At the same time, I will also go over what made trading this month successful. At the end of the day, however, locking in consistent profits in green is of most importance.

### Taking reasonable returns

Before talking about when to draw the line when it comes to taking returns and how to make an accurate prediction of when the stock will rebound or consolidate, I'd like to first talk about behavioral finance and a probable reason why it kills off the profits of so many traders.

>If you are interested in learning about behavioral finance and financial markets in general, I highly recommend watching [Financial Markets by Yale University on Coursera.](https://www.coursera.org/learn/financial-markets-global)

It is human nature to be optimistic during times of success and pessimistic during times of strife. This is the reason why bull markets and bear markets exist.



This is a psychological phenomenon that can be observed not only on a yearly basis, but also on a daily basis. Even the very best stocks with the biggest potential for growth go under consolidation at one point before moving back up.


![SPY pullbacks on an uptrend](https://www.investopedia.com/thmb/4eMKr38NX2vVHUe2XIoe-UblkyY=/1400x622/filters:no_upscale():max_bytes(150000):strip_icc()/spychart08312017-5bfd6a4346e0fb0051b53a4e)

Pullbacks sucks for the investor, but as a trader, being able to capitalize on volatility is the most important skill to have. Now, let's dive into a few reasons why taking in reasonable returns are very important.

#### Theta decay A.K.A time decay

![Scary stuff...](https://theoptionprophet.com/images/Theta_Picture1.jpg)

As you can see, the decay of the options contract value is exponential as the date to expiration gets closer. This is because the likelihood of a contract hitting the at the money price gets lower and lower as time goes on. 

What does this mean then? If you are trading weekly options, there's going to be some trouble if you wait too long to execute your option. I always give at least two weeks until expiration for my contracts and at the latest (unless something interesting occurs) execute them one week later. 

If I had a bigger account, I would definitely buy contracts which have longer time frames for execution.

#### What if there is high volatility?
A little bit off topic from talking about taking in reasonable returns, but going back on what I said about expiration dates, I would also like to note an exception.

>So, why wouldn't theta decay destroy the price of my contract? This is because of IV in certain cases, more specifically earnings.

At least 30% of the gains I have made off this month have been from pre-earning plays, where I capitalize on the high IV (implied volatility) prior to the earnings announcement and then sell right beforehand. A lot of times for these options, I buy them on the same week as earnings. To understand why theta decay does not severely impact the price of an option contract during earnings week, take a look at the following Black-Scholes model used for pricing contracts.

![Black-Scholes Model. Note that volatility is valued more than time in this formula.](http://www.theoptionsguide.com/images/black-scholes.gif)

As can be observed from the formula, contracts will have extremely high premiums during times of volatility. This volatility, combined with the knowledge of general sentiment towards a stock prior to earnings, provides great opportunity for profitable plays. 

**My personal favorite strategy here is a close to the strike price [long strangle](https://www.optionsplaybook.com/option-strategies/long-strangle/), which is position neutral.** As long as the stock goes up or down a good amount, I earn money. This strategy has consistently netted me 20-30% returns on my contracts prior to earnings. 

If I'm feeling confident about the sentiment behind a stock prior to earnings, I will even do naked calls and puts. 

>Now don't hold them during earnings, because something called a [IV Crush](https://www.markettamer.com/blog/beware-of-implied-volatility-crush) will happen.

And lastly, it is perfectly fine to ride the wave. Just remember that waves come crashing down all the time.

![That's gotta hurt...](https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi-1pTx377gAhVRGt8KHfsPBwcQjRx6BAgBEAU&url=http%3A%2F%2Ftheemotionallyintelligentinvestor.com%2F%3Fp%3D145&psig=AOvVaw0daYeIBdPkT7ZhxG4Ax9J7&ust=1550354806230036)

![At least profanity-filter is not dead last this time](https://cdn-images-1.medium.com/max/1600/1*LYOeGE6vTXTAKhJ_W1fZgQ.png)

None of the libraries I’d found on PyPI met my needs, so I built my own.

### Building profanity-check, Part 1: Data

I knew that I wanted `profanity-check` to base its classifications on data to avoid being subjective _(read: to be able to say I used Machine Learning)_. I put together a combined dataset from two publicly-available sources:

*   the “Twitter” dataset from [t-davidson/hate-speech-and-offensive-language](https://github.com/t-davidson/hate-speech-and-offensive-language/tree/master/data), which contains tweets scraped from Twitter.
*   the “Wikipedia” dataset from [this Kaggle competition](https://www.kaggle.com/c/jigsaw-toxic-comment-classification-challenge) published by Alphabet’s [Conversation AI](https://conversationai.github.io/) team, which contains comments from Wikipedia’s talk page edits.

Each of these datasets contains text samples hand-labeled by humans through crowdsourcing sites like [Figure Eight](https://www.figure-eight.com/).

Here’s what my dataset ended up looking like:

![Combined = Tweets + Wikipedia](https://cdn-images-1.medium.com/max/1600/1*Bw_we8cbs-WOpWXOCxzSTg.png)

> The Twitter dataset has a column named `class` that’s 0 if the tweet contains hate speech, 1 if it contains offensive language, and 2 if it contains neither. I classified any tweet with a `class` of 2 as “Not Offensive” and all other tweets as “Offensive.”

> The Wikipedia dataset has several binary columns (e.g. `toxic` or `threat`) that represent whether or not that text contains that type of toxicity. I classified any text that contained _any_ of the types of toxicity as “Offensive” and all other texts as “Not Offensive.”

### Building profanity-check, Part 2: Training

Now armed with a cleaned, combined dataset (which you can [download here](https://github.com/vzhou842/profanity-check/blob/master/profanity_check/data/clean_data.csv)), I was ready to train the model!

> I’m skipping over how I cleaned the dataset because, honestly, it’s pretty boring— if you’re interested in learning more about preprocessing text datasets check out [this article](https://machinelearningmastery.com/clean-text-machine-learning-python/) or [this post](https://medium.com/@datamonsters/text-preprocessing-in-python-steps-tools-and-examples-bf025f872908).

```python
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.calibration import CalibratedClassifierCV
from sklearn.svm import LinearSVC
from sklearn.externals import joblib

# Read in data
data = pd.read_csv('clean_data.csv')
texts = data['text'].astype(str)
y = data['is_offensive']

# Vectorize the text
vectorizer = CountVectorizer(stop_words='english', min_df=0.0001)
X = vectorizer.fit_transform(texts)

# Train the model
model = LinearSVC(class_weight="balanced", dual=False, tol=1e-2, max_iter=1e5)
cclf = CalibratedClassifierCV(base_estimator=model)
cclf.fit(X, y)

# Save the model
joblib.dump(vectorizer, 'vectorizer.joblib')
joblib.dump(cclf, 'model.joblib')
```
<figcaption>
  Are you also surprised the code is so short?
  Apparently <a href="https://scikit-learn.org/" target="_blank">scikit-learn</a> does everything.
</figcaption>

Two major steps are happening here: (1) vectorization and (2) training.

#### Vectorization: Bag of Words

I used `scikit-learn`'s [CountVectorizer](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.CountVectorizer.html) class, which basically turns any text string into a vector by counting how many times each given word appears. This is known as a [Bag of Words](https://en.wikipedia.org/wiki/Bag-of-words_model) (BOW) representation. For example, if the only words in the English language were `the`, `cat`, `sat`, and `hat`, a possible vectorization of the sentence `the cat sat in the hat` might be:

![“the cat sat in the hat” -> [2, 1, 1, 1, 1]](https://cdn-images-1.medium.com/max/1600/1*sbnts1u_QFB_V-X5DSC3pg.png)

The `???` represents any unknown word, which for this sentence is `in`. Any sentence can be represented in this way as counts of `the`, `cat`, `sat`, `hat`, and `???`!

![A handy reference table for the next time you need to vectorize “cat cat cat cat cat”](https://cdn-images-1.medium.com/max/1600/1*-wONWZDab2gNQP3Rfdpt_A.png)

Of course, there are far more words in the English language, so in the code above I use the `fit_transform()` method, which does 2 things:

*   **Fit:** learns a vocabulary by looking at all words that appear in the dataset.
*   **Transform**: turns each text string in the dataset into its vector form.

#### Training: Linear SVM

The model I decided to use was a Linear Support Vector Machine (SVM), which is implemented by `scikit-learn`'s [LinearSVC](https://scikit-learn.org/stable/modules/generated/sklearn.svm.LinearSVC.html) class. [This post](https://medium.com/machine-learning-101/chapter-2-svm-support-vector-machine-theory-f0812effc72) and [this tutorial](https://www.svm-tutorial.com/2014/11/svm-understanding-math-part-1/) are good introductions if you don’t know what SVMs are.

> The [CalibratedClassifierCV](https://scikit-learn.org/stable/modules/generated/sklearn.calibration.CalibratedClassifierCV.html) in the code above exists as a wrapper to give me the `predict_proba()` method, which returns a probability for each class instead of just a classification. You can pretty much just ignore it if that last sentence made no sense to you, though.

Here’s one (simplified) way you could think about why the Linear SVM works: during the training process, the model learns which words are “bad” and how “bad” they are because those words appear more often in offensive texts. **It’s as if the training process is picking out the “bad” words for me**, which is much better than using a wordlist I write myself!

A Linear SVM combines the best aspects of the other profanity detection libraries I found: it’s fast enough to run in real-time yet robust enough to handle many different kinds of profanity.

### Caveats

That being said, `profanity-check` is far from perfect. Let me be clear: take predictions from `profanity-check` with a grain of salt because **it makes mistakes.** For example, its not good at picking up less common variants of profanities like “f4ck you” or “you b1tch” because they don’t appear often enough in the training data. You’ll never be able to detect _all_ profanity (people will come up with new ways to evade filters), but `profanity-check` does a good job at finding most.

### profanity-check

`profanity-check` is open source and available on PyPI! To use it, simply

```
$ pip install profanity-check
```

How could `profanity-check` be even better? Feel free to reach out or comment with any thoughts or suggestions!

* * *

_This article was originally posted on [Medium](https://medium.com/@victorczhou/building-a-better-profanity-detection-library-with-scikit-learn-3638b2f2c4c2)._

