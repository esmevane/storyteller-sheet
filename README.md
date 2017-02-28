# Storyteller Sheet

A small sheet creation lib for storyteller games.

## Installation

```bash
npm i storyteller-sheet
```

## Usage

The main porpoise here is to ensure that we have a schema structure which can evolve along with the different kinds of Storyteller games, but still be comparable.  Right now the best design seems to be to develop a sheet _schema_, and then build a character on top of that.

### The porpoise of the schema

Storyteller characters are different according to splat and type within a splat, but they're designed to be comparable and function by the same basic laws.  It seems like if we can create a _schema_ which defines sections, we can then build other systems on top of sheets which use that schema.

## License

Licensed 2017, MIT, Joseph McCormick.  [More details here](LICENSE.md)

## Contributing

Submit any issues [here](https://github.com/esmevane/storyteller-sheet/issues) - please take note of the [code of conduct][CODE_OF_CONDUCT.md] before submitting any issues or pull requests.

To create a pull request:

* Fork the repository
* Create a local feature branch of your changes
* Please provide tests
* Submit your local feature branch vs. this repository as a pull request

## Contact

Feel free to contact me at any point if you have questions or suggestions!
