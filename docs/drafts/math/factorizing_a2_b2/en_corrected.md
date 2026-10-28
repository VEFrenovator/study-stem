<link rel="stylesheet" href="static/styles.css">

# Factorizing $a^2 + b^2$

## Abbreviated multiplication formulas

Let's recall the basic abbreviated multiplication formulas:

| Formula name | Formula |
|---|---|
| Square of a sum | $\textcolor{teal}{(a + b)^2 = a^2 + 2ab + b^2}$ |
| Square of a difference | $\textcolor{teal}{(a - b)^2 = a^2 - 2ab + b^2}$ |
| Difference of squares | $\textcolor{red}{a^2 - b^2 = (a - b)(a + b)}$ |
| Cube of a sum | $\textcolor{purple}{(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3}$ |
| Cube of a difference | $\textcolor{purple}{(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3}$ |
| Sum of cubes | $\textcolor{olive}{a^3 + b^3 = (a + b)(a^2 - ab + b^2)}$ |
| Difference of cubes | $\textcolor{olive}{a^3 - b^3 = (a - b)(a^2 + ab + b^2)}$ |

We can see that the difference of squares drops out of the list. It does not have a pair. But does the formula for the sum of squares exist? To answer this question, let's start from the familiar difference of squares.

## Deriving $a^2 - b^2$

### Geometrically

Let's derive the formula for the difference of squares. Perhaps this will provide the intuition needed to move toward the sum. Now consider two squares with side lengths $a$ and $b$ and areas $a^2$ and $b^2$, respectively. If we superimpose one pair of their vertices and align their sides so that they are parallel, then the obvious difference $a^2 - b^2$ is contained in the L-shaped polygon left after removing the smaller square of area $b^2$ from the larger square of area $a^2$.

<img src="docs/_media/math/factorizing_a2_b2/Difference_of_two_squares_geometric_proof.png" alt="Difference of two squares geometric proof">
<p class="img-note">
    Copyright <a href="https://commons.wikimedia.org/wiki/File:Difference_of_two_squares_geometric_proof.svg">cmglee</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons
</p>

In the L-shaped polygon, draw a segment as in the picture above. Two rectangles are formed, each with one side of length $a - b$. If we place these rectangles together along that common side, a larger rectangle with side lengths $a - b$ and $a + b$ is formed. Recall that the area has not changed: the area of the L-shaped polygon equals the area of this larger rectangle. The latter is $(a - b)(a + b)$. Therefore,

$$
a^2 - b^2 = (a - b)(a + b)
$$

### Algebraically

Another way to think about the formula is algebraic. Using the grouping method, we have:

$$
\begin{align*}
    a^2 - b^2 &= a^2 + ab - b^2 - ab \\
              &= a(a + b) - b(b + a) \\
              &= (a + b)(a - b)
\end{align*}
$$

## Deriving $a^2 + b^2$

Could we somehow interpret the sum of squares geometrically? We could try to place the squares side by side or corner to corner, but no matter how we arrange them, there is always a nuisance: the smaller square sticks out beyond the boundary of the larger one. If only we could mirror the smaller square inward, everything would become $a^2 - b^2$... Surprisingly, this is possible, but only if we introduce *negative areas*, which is a direct consequence of *imaginary numbers*.

<iframe width="560" height="315" src="https://www.youtube.com/embed/cUzklzVXJwo?si=cnb4YpIKh8E82gjl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<div class="img-note">
    This video explains how the imaginary unit was invented. Moreover, at <a href="https://youtu.be/cUzklzVXJwo?si=jPATZ0d4FcyEQmY_&amp;t=1033">17:14</a> Derek talks about negative areas, which is exactly what we need.
</div>

With that knowledge, notice that

$$
b^2 = -(bi)^2
$$

Indeed, $-(bi)^2 = -1 \cdot i^2 \cdot b^2 = -1 \cdot (-1) \cdot b^2 = b^2$, since $i^2 = -1$ by definition. Now we can transform

$$
a^2 + b^2 = a^2 - (bi)^2
$$

And finally, apply the difference-of-squares formula:

$$
\begin{align*}
a^2 + b^2 &= a^2 - (bi)^2 \\
          &= (a - bi)(a + bi)
\end{align*}
$$

> $a^2 + b^2 = (a - bi)(a + bi)$ — but does it have any practical use?

## Applications of $a^2 + b^2$

1. **Multiplication of complex conjugates**. If $z = a + bi$ is multiplied by its conjugate $\overline{z} = a - bi$, then

$$
z\overline{z} = (a + bi)(a - bi) = a^2 + b^2
$$

2. **Complex division and rationalization**. If we need to divide two complex numbers, say $\frac{c + di}{a + bi}$, we multiply the numerator and denominator by the conjugate of the denominator, $a - bi$. As discussed above, this reduces to the sum-of-squares formula. This process allows us to express the real and imaginary parts of the result.

$$
\frac{c + di}{a + bi} = \frac{(c+di)(a-bi)}{(a+bi)(a-bi)} = \frac{(c+di)(a-bi)}{a^2 + b^2}
$$

3. More applications can be found [on Mathwords](https://www.mathwords.com/s/sum_of_squares.htm) and [in Gemini chat](https://share.gemini.google/TXebBKLhC9kf).

<star-divider></star-divider>

Thus, the sum-of-squares formula exists and is widely used in complex transformations.