<link rel="stylesheet" href="static/styles.css">

# Разложение $a^2 + b^2$ на множители

## Формулы сокращённого умножения

Вспомним основные формулы сокращённого умножения:

| Formula name | Formula |
|---|---|
| Square of a sum | $\textcolor{teal}{(a + b)^2 = a^2 + 2ab + b^2}$ |
| Square of a difference | $\textcolor{teal}{(a - b)^2 = a^2 - 2ab + b^2}$ |
| Difference of squares | $\textcolor{red}{a^2 - b^2 = (a - b)(a + b)}$ |
| Cube of a sum | $\textcolor{purple}{(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3}$ |
| Cube of a difference | $\textcolor{purple}{(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3}$ |
| Sum of cubes | $\textcolor{olive}{a^3 + b^3 = (a + b)(a^2 - ab + b^2)}$ |
| Difference of cubes | $\textcolor{olive}{a^3 - b^3 = (a - b)(a^2 + ab + b^2)}$ |

Видно, что разность квадратов "выпадает" из общего списка. У неё нет пары. Но существует ли формула суммы квадратов? Чтобы ответить на этот вопрос, для начала обратимся к привычной разности квадратов.

## Выведение $a^2 - b^2$

### Геометрически

Выведем формулу разности квадратов. Возможно, это даст необходимую интуицию для продвижения к сумме. Итак, прежде всего формулу можно вывести, подразумевая под $a^2$ и $b^2$ реальные квадраты со сторонами $a$ и $b$ соответственно. Если наложить друг на друга одну пару их углов, а стороны пустить параллельно, то заведомая разность $a^2 - b^2$ заключена L-образной форма, оставшейся после высечения меньшего квадрата площади $b^2$ из большего $a^2$.

<img src="docs/_media/maths/factorizing_a2+b2/Difference_of_two_squares_geometric_proof.png" alt="Difference of two squares geometric proof">
<p class="img-note">
    Copyright <a href="https://commons.wikimedia.org/wiki/File:Difference_of_two_squares_geometric_proof.svg">cmglee</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons
</p>

В L-образной форме проведём отрезок, как на картинке 2 выше. Образуется два прямоугольника, у которых есть стороны одинаковой длины $a - b$. Приложив прямоугольники этой общей стороной, образуется прямоугольник со сторонами $a-b$ и $a+b$. Площадь этого конечного прямоугольника — $(a - b)(a + b)$. Значит, $a^2 + b^2 = (a - b)(a + b)$.

### Алгебраически

Ещё один способ выведение формулы — алгебраический. Используя метод группировки, имеем:

$$
\begin{align*}
    a^2 - b^2 &= a^2 + ab - b^2 - ab \\
              &= a(a + b) - b(b + a) \\
              &= (a + b)(a - b)
\end{align*}
$$

## Выведение $a^2 + b^2$

Можно ли как-либо интерпретировать сумму квадратов геометрически? Можно попробовать составлять квадраты сторонами вдоль или "угол к углу", но как их ни крути, всегда мешается то, что маленький квадрат вылезает за пределы большого. Вот если бы мы могли отзеркалить квадрат b внутрь... Ведь тогда всё снова превратилось бы в $a^2 - b^2$... Неожиданно, это возможно, но только если ввести *отрицательные площади*. Мнимая единица нам в помощь!

<iframe width="560" height="315" src="https://www.youtube.com/embed/cUzklzVXJwo?si=cnb4YpIKh8E82gjl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<div class="img-note">
    This video explains how imaginary unit was invented. Moreover, at <a href="https://youtu.be/cUzklzVXJwo?si=jPATZ0d4FcyEQmY_&amp;t=1033">17:14</a> Derek says about negative areas, which is exactly what we need.
</div>

With that knowledge, давайте заметим, что 

$$
b^2 = -(bi)^2
$$ 

И в правду, $-(bi)^2 = -1 * i^2 * b^2 = -1 * -1 * b^2 = b^2$, т.к. $i^2 = -1$ by definition. Теперь мы можем преобразовать

$$
a^2 + b^2 = a^2 - (bi)^2
$$

А теперь воспользуемся нашей разностью квадратов, получая

$$
\begin{align*}
a^2 + b^2 &= a^2 - (bi)^2 \\
          &= (a - bi)(a + bi)
\end{align*}
$$

Вот и всё! Но в этом вообще есть какой-то смысл?

## Применение $a^2 + b^2$

1. **Перемножение комплексно-сопряжённых чисел** Если $z = a + bi$ необходимо перемножить на его комплексно-сопряжённое $\overline{z} = a - bi$. При перемножении, имеем $z\overline{z} = (a + bi)(a - bi) = a^2 + b^2$
2. **Complex Division and Rationalization**. Если необходимо разделить два комплексных числа, скажем, $\frac{c + di}{a + bi}$, нужно умножить числитель и знаменатель на комплекно-сопряжённое число знаменателя $a - bi$. А это, как уже обсуждалось выше, сводится к нашей формуле. Данная операция позволяет выразить вещественную и мнимую части из частного.

$$
\frac{c + di}{a + bi} = \frac{(c+di)(a-bi)}{(a+bi)(a-bi)} = \frac{(c+di)(a-bi)}{a^2 + b^2}
$$

3. Больше применений можно найти [на mathwords](https://www.mathwords.com/s/sum_of_squares.htm) и [в Gemini чате](https://share.gemini.google/TXebBKLhC9kf).

<star-divider></star-divider>

Таким образом, формула суммы квадратов существует и широко используется в комплексных преобразованиях.
