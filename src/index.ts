import App from './app';

const port = process.env.PORT || 3000;

App.listen(port, (err: any) => {
  if (err) {
    return console.log(err);
  }

  return console.log(`server is listening on ${port}`);
});