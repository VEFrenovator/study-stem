<link rel="stylesheet" href="static/styles.css">

# Factorizing $a^2 + b^2$

## Abbreviated multiplication formulas

Let's remember the basic abbreviated multiplication formulas

| Formula name | Formula |
|---|---|
| Square of a sum | $\textcolor{teal}{(a + b)^2 = a^2 + 2ab + b^2}$ |
| Square of a difference | $\textcolor{teal}{(a - b)^2 = a^2 - 2ab + b^2}$ |
| Difference of squares | $\textcolor{red}{a^2 - b^2 = (a - b)(a + b)}$ |
| Cube of a sum | $\textcolor{purple}{(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3}$ |
| Cube of a difference | $\textcolor{purple}{(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3}$ |
| Sum of cubes | $\textcolor{olive}{a^3 + b^3 = (a + b)(a^2 - ab + b^2)}$ |
| Difference of cubes | $\textcolor{olive}{a^3 - b^3 = (a - b)(a^2 + ab + b^2)}$ |

We can see, that difference of squares drops off the list. It does not have a pair. But does the formula for *sum* of squares exist? To answer this question, let's start by turning to familiar difference of squares.

## Derivation of $a^2 - b^2$

### Geometrically

Let’s derive the formula for the difference of squares. Possibly, it will give necessary intuition to move towards the sum. Now, let's consider two squares with side lengths $a$ and $b$ and areas $a^2$ and $b^2$ respectfully. If we superimpose a pair of their vertices, and align their side so they are parallel, then intentional area $a^2 - b^2$ is locked into L-shaped polygon, left after cutting a smaller square of area $b^2$ out of a larger one of area $a^2$.

<img src="docs/_media/math/factorizing_a2_b2/Difference_of_two_squares_geometric_proof.png" alt="Difference of two squares geometric proof">
<p class="img-note">
    Copyright <a href="https://commons.wikimedia.org/wiki/File:Difference_of_two_squares_geometric_proof.svg">cmglee</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons
</p>

In the L-shaped polygon, let's draw a segment, as on the picture 2 above. Two rectangles form, which have 2 sides with the same length $a - b$. If we superimpose these two, a new big rectangle with side lengths $a - b$ and $a + b$ forms. Remind that the areas did not change: the area of L-shaped polygon equals to the area of the big rectangle. Area of the last is $(a - b)(a + b)$. Then, $a^2 + b^2 = (a - b)(a + b)$.

### Algebraically

Another way to think about the formula is algebraical. Using the grouping method, we have:

$$
\begin{align*}
    a^2 - b^2 &= a^2 + ab - b^2 - ab \\
              &= a(a + b) - b(b + a) \\
              &= (a + b)(a - b)
\end{align*}
$$

## Derivation of $a^2 + b^2$

Could we somehow interpret sum of squares geometrically? Of course, we could try to superimpose the squares alongside or corner to corner, but no matter how you look at them, it is always a nuisance that the small square extends beyond the boundaries of the large one. If only we could mirror smaller rectangle inside, everything would become a $a^2 - b^2$... Suddenly, it is possible, but only if we introduce *negarive areas*, which is a direct consequence of *imaginary numbers*.

<iframe width="560" height="315" src="https://www.youtube.com/embed/cUzklzVXJwo?si=cnb4YpIKh8E82gjl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<div class="img-note">
    This video explains how imaginary numbers were invented. Moreover, at <a href="https://youtu.be/cUzklzVXJwo?si=jPATZ0d4FcyEQmY_&amp;t=1033">17:13</a> Derek says about negative areas, which is exactly what we need.
</div>

With that knowledge, let's notice that

$$
b^2 = -(bi)^2
$$

Indeed, $-(bi)^2 = -1 * i^2 * b^2 = -1 * -1 * b^2 = b^2$, since $i^2 = -1$ by definition. Now we can make transformations

$$
a^2 + b^2 = a^2 - (bi)^2
$$

And finally, apply our difference of squares formula

$$
\begin{align*}
a^2 + b^2 &= a^2 - (bi)^2 \\
          &= (a - bi)(a + bi)
\end{align*}
$$

> $a^2 + b^2 = (a - bi)(a + bi)$ — but does it have any application?..

## Application of $a^2 + b^2$

1. **Multiplication of complex conjugate numbers**. If $z = a + bi$ should be multiplied by its conjugate $\overline{z} = a - bi$, we have $z\overline{z} = (a + bi)(a - bi) = a^2 + b^2$.
2. **Complex division and rationalization**. If we should divide two complex numbers, say $\frac{c + di}{a + bi}$, we should multiply nominator and denominator by denominator's conjugate $a - bi$. And this, as already discussed above, boils down to sum of squares formula. This whole operation lets us express the real and imaginary parts of the result.

$$
\frac{c + di}{a + bi} = \frac{(c+di)(a-bi)}{(a+bi)(a-bi)} = \frac{(c+di)(a-bi)}{a^2 + b^2}
$$

3. More applications you can find [on mathwords](https://www.mathwords.com/s/sum_of_squares.htm) and [inside Gemini chat](https://share.gemini.google/TXebBKLhC9kf).

<star-divider></star-divider>

Thus, the sum-of-squares formula exists and is widely used in complex transformations.