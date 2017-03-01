import express from "express";
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config';

const app = express();
const port = "8000";
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));
app.use('*', (req, res) => {
			res.sendFile(path.join(__dirname, '../src/index.html'));
		}
);
app.listen(port, (err) => {
	if (err) {
		//console.log("error", err);
	}
	else {
		open(`http:\\localhost:${port}`);
	}
});
