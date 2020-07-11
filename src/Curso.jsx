import React from 'react';

const Curso = () => (
  <article class="card">
    <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src="https://edteam-media.s3.amazonaws.com/courses/original/e8207ec4-e9a7-4cba-86a8-ee80c443a37f.jpg" alt="cualquier cosa" />
    </div>
    <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 class="t5 s-mb-2 s-center">
        Programación orientada a objetos con Go
    </h3>
      <div class="s-mb-2 s-main-center">
        <div class="card__teacher s-cross-center">
          <div class="card__avatar s-mr-1">
            <div class="circle img-container">
              <img src="https://edteam-media.s3.amazonaws.com/users/thumbnail/c01ab318-fed5-40eb-8e78-1fe245f85fea.jpg" alt="cualquier cosa" />
            </div>
          </div>
          <span class="small">Alexys Lozada</span>
        </div>
      </div>
      <div class="s-main-center">
        <a class="button--ghost-alert button--tiny" href="#">$ 20USD</a>
      </div>
    </div>
  </article>
);

export default Curso;