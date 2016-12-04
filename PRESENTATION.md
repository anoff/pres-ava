# Andreas Offenhäuser

<img align="right" width="15%" src="./assets/iceicesquare.jpg" style="border:none;box-shadow:none;background: none"/>

\#node \#diving \#microservices \#iot \#architecture \#bosch \#skiing

@an0xFF

github.com/anoff


---


# ava/avajs

> 🚀 Futuristic JavaScript test runner


---


# (my) favorite features


---


## ⏩ maximum concurrency
* test cases run concurrently
* test files are spawned in parallel (new node process)

Note:
* isolation (yay)
* forces you to write atomic tests


---


## 🔮🔮 integrated ES2015 support
* integrated babel
* write tests and don't worry about transpiling
* transpiles on execution

Note:
* babel behavior can be changed by editing ava settings
* default is stage-2 (whatever that is 💁)


---


## 💃💃 async/await
> callback < promises < await

Note:


---


## 👀🔍 file watch
* watches test and all other `.js` files
* reruns affected tests if
 * test file is modified
 * required source files are modified


----


`ava --watch`


----


```script
// package.json
"scripts": {
  "test": "ava,
  "test:watch: "ava --test"
}

npm test -- --watch
npm run test:watch
```


---


# opinitionated but customizable
* almost everything can be [customized](https://github.com/avajs/ava#configuration)
* `ava` entry in `package.json`


---


# issues


---


## (unlimited) parallelization
* one process per test file
* 💣💥 for large projects
* use `concurrency=N` to limit (EXPERIMENTAL)


--- 


## highly opinitionated
* AVA strives to be simple


----


## no test grouping
* write small test files
  * multiple testfiles per source


## 😢😢 no browser testing

## simple assertions


---


# examples
