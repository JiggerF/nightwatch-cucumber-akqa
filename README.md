# Overview
A sample Node.JS test automation framework using Nightwatch-Cucumber to test an e-commerce website.
Test Framework is dockerised for easy deployment. All configurations can reside in the script folder `\script`.
Bash script allows flexsibility for CI build tools callback.


# Pre-requisite
1. Mac or Linux environment
2. Docker service running
3. Clone git repo


# How to Run test within Docker container
1. From root folder, run bash script
```
 ./script/test-wishlist
```

# How to Run locally NOT using a Docker container
1. Open shell terminal and type command line to export env variable
```
export TEST_APP='https://www.bunnings.com.au'
```
2. Run test
```
npm run e2e-test   
```


# Reading

## UI test automation framework tech stack:
- Nightwatch JS
- Cucumber
- Selenium
-

## Complete Guide to Using nightwatch-cucumber
- http://mucsi96.github.io/nightwatch-cucumber/


## Helpful Atom Editor Plugins for Cucumber Gherkin
- https://atom.io/packages/cucumber-step
- https://github.com/edda/cucumber-atom


## Cucumber best practice, anti-pattern
- https://cucumber.io/blog/2016/07/01/cucumber-antipatterns-part-one
- https://cucumber.io/blog/2016/08/31/cucumber-anti-patterns-part-two
- https://blog.codeship.com/cucumber-best-practices/
- JS cucumber RegEx for Steps sample:  https://github.com/webdriverio/cucumber-boilerplate
