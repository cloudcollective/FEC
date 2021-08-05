const express = require('express');
const path = require('path');
const atelier = require('./atelier');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../', 'client', 'dist')));

app.get('/products/:id', (req, res) => {
  const { id } = req.params;

  Promise.all([
    atelier.getProductById(id),
    atelier.getProductStylesById(id),
    atelier.getRelatedProductsById(id),
    atelier.getReviewsById(id),
    atelier.getMetaReviewsById(id),
  ])
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((error) => {
      res.status(501).send(error);
    });
});

// Get single product by id
app.get('/single/products/:id', (req, res) => {
  const { id } = req.params;

  atelier.getProductById(id)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((error) => {
      res.status(501).send(error);
    });
});

app.get('/related/:id', (req, res) => {
  const { id } = req.params;

  Promise.all([
    atelier.getProductById(id),
    atelier.getProductStylesById(id),
    atelier.getMetaReviewsById(id),
  ])
    .then((data) => {
      const relatedData = {
        id: data[0].id,
        name: data[0].name,
        category: data[0].category,
        price: data[0].default_price,
        features: data[0].features,
        url: data[1].results[0].photos[0].url,
        ratings: data[2].ratings,
      };

      res.status(201).send(relatedData);
    })
    .catch((error) => {
      res.status(501).send(error);
    });
});

app.get('/reviews/:id', (req, res) => {
  const { id, sort } = req.query;

  Promise.all([
    atelier.getReviewsById(id, sort),
    atelier.getMetaReviewsById(id),
  ])
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((error) => {
      res.status(501).send(error);
    });
});

app.get('/reviews/meta', (req, res) => {
  const { id } = req.params;

  atelier.getMetaReviewsById(id)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((error) => {
      res.status(501).send(error);
    });
});

app.put('/qa/answers/:answerId/report', (req, res) => {
  const { answerId } = req.params;

  atelier.reportAnswer(answerId)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((error) => {
      res.status(501).send(error);
    });
});

app.put('/qa/answers/:answerId/helpful', (req, res) => {
  const { answerId } = req.params;

  atelier.markAnswerHelpful(answerId)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((error) => {
      res.status(501).send(error);
    });
});

app.put('/qa/questions/:questionId/helpful', (req, res) => {
  const { questionId } = req.params;

  atelier.markQuestionHelpful(questionId)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((error) => {
      res.status(501).send(error);
    });
});

app.get('/qa/questions', (req, res) => {
  const { id } = req.query;

  atelier.getQuestions(id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(501).send(error);
    });
});

app.post('/qa/questions/', (req, res) => {
  const { question, nickname, email } = req.body.inputs;
  const { productId } = req.body;

  atelier.postQuestion(question, nickname, email, productId)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((error) => {
      res.status(501).send(error);
    });
});

app.post('/qa/questions/:questionId/answers', (req, res) => {
  const { answer, nickname, email } = req.body.inputs;
  const { questionId } = req.params;

  atelier.postAnswer(answer, nickname, email, questionId)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((error) => {
      res.status(501).send(error);
    });
});

const port = 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port: ${port}`);
});
