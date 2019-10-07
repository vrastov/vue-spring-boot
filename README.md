# Vue + spring-boot
Пример проекта с использованием Vue и spring-boot

### Предпосылки
* На текущей работе нет интернета, соответсвенно, использование npm затруднено чуть более чем совсем.
* Заносить и легализовать jar для репозитория maven умеею многие. 
* Есть java разработчики, знающих js единицы, но от [Vaadin](https://vaadin.com) их тошнит. 

### Цели
* Каркас проекта для последующего использования в интранете, пользователей не так много, а пропускная
 способность сети большая.
* Простота использования java разработчиками. 
* Отсутствие стадии сборки для фронтенда: отредактировал, сохранил, обнавил страницу в брайзере,
 видишь результат.
* Самому пощупать Vue, и оценить его.

##### Документирование
Постораюсь максимально подробно описывать, что делаю в комментариях к коммитам, а так-же в самом коде.

Для запуска в dev режиме, когда *.html, *.js, *.css, *.vue и остальное содержимое src/main/resources/public
 берется не с использованием ClassLoader из ресурсов, куда попадает при сборке maven, IDE, etc, а не
 посредственно из ФС добавте в качестве аргумента `--dev=true` и DevelopWebMvcConfigurer придет вам на помощь.
 
Запустите Application с аргументом `--dev=true`, зайдите на [localhost:8080](http://localhost:8080/), после 
 чего обновите страницу в браузере не перезапуская Application, у вас должно отразится новое содержимое.
 
Поскольку я еще тот фронтэндщик, и во многом просто не шарю, я обычно использую Chrome с отключенным
 кешированием.
 
 В  [src/main/resources/public/app](src/main/resources/public/app) и 
 [src/main/resources/public/scripts](src/main/resources/public/scripts) так же есть  README.md с описанием 
 содержимого.