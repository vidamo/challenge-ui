/**
 * Prints next steps.
 *
 * @param {string} blockName The block name.
 * @param  {string} blockDir The block directory.
 */

const chalk = require('chalk');

module.exports = () => {
	console.log('\n\nā ', chalk.black.bgGreen(' All done! Happy coding. \n'));
	console.log(
		'Installer has added šŗ GoPablo files to the current directory.  ',
		'\nInside this directory, you can run this command:',
	);

	// Scripts.
	console.log(
		'\nš ',
		' Type',
		chalk.black.bgWhite(' npm run dev '),
		'\n\n',
		'	Use to compile and run your files.',
		'\n',
		'	Watches for any changes and reports back any errors in your code.',
	);

	// Support.
	console.log('\nā ', chalk.black.bgYellow(' Support GoPablo \n'));
	console.log('Like GoPablo? Check out our other free and open source repositories: \n');
	console.log(
		`	${chalk.yellow('WordPressify ā')} https://bit.ly/2KTqyQX`,
		'\n',
		`	${chalk.gray('Development workflow for WordPress themes.')}`,
		'\n',
		`	${chalk.yellow('FuzzyMail ā')} https://bit.ly/2P3Irlr`,
		'\n',
		`	${chalk.gray('Email template generator. Making emails fun again.')}`,
		'\n',
		`	${chalk.yellow('ReactFondue ā')} https://bit.ly/2OXgStR`,
		'\n',
		`	${chalk.gray('SEO optimized React applications with SSR.')}`,
		'\n',
		`	${chalk.green('Powered by Riangle ā')} https://bit.ly/2P5i26I`,
		'\n',
		'\n',
		`	${chalk.red('Thank you for using šŗ GoPablo ā')} https://www.gopablo.co`,
	);

	// Get started.
	console.log('\n\nšÆ ', chalk.black.bgGreen(' Get Started ā \n'));
	console.log(' You can start: \n');
	console.log(
		` ${chalk.dim('1.')} Editing your new website: ${chalk.green(`${process.cwd()}/src`)}`,
	);
	console.log(` ${chalk.dim('2.')} Running: ${chalk.green('npm')} run dev`, '\n\n');
	process.exit();
};
