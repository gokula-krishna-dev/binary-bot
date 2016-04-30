Bot.Config = function Config() {
	return {
		lists: {
			PAYOUTTYPE: [
				[i18n._('Payout'), 'payout'],
				[i18n._('Stake'), 'stake']
			],
			CURRENCY: [
				['USD', 'USD'],
				['EUR', 'EUR'],
				['GBP', 'GBP'],
				['AUD', 'AUD']
			],
			DETAILS: [
				[i18n._('statement'), '1'],
				[i18n._('ask price'), '2'],
				[i18n._('payout'), '3'],
				[i18n._('profit'), '4'],
				[i18n._('contract type'), '5'],
				[i18n._('entry spot'), '6'],
				[i18n._('entry value'), '7'],
				[i18n._('exit spot'), '8'],
				[i18n._('exit value'), '9'],
				[i18n._('barrier'), '10'],
			],
			CHECK_RESULT: [
				[i18n._('Win'), 'win'],
				[i18n._('Loss'), 'loss'],
			],
			CHECK_DIRECTION: [
				[i18n._('Up'), 'up'],
				[i18n._('Down'), 'down'],
				[i18n._('No Change'), ''],
			],
		},

		opposites: {
			UPDOWN: [{
				i18n._('Up'): 'CALL'
			}, {
				i18n._('Down'): 'PUT'
			}],
			ASIAN: [{
				i18n._('Asian Up'): 'ASIANU'
			}, {
				i18n._('Asian Down'): 'ASIAND'
			}],
			MATCHESDIFFERS: [{
				i18n._('Matches'): 'DIGITMATCH'
			}, {
				i18n._('Differs'): 'DIGITDIFF'
			}],
			EVENODD: [{
				i18n._('Even'): 'DIGITEVEN'
			}, {
				i18n._('Odd'): 'DIGITODD'
			}],
			OVERUNDER: [{
				i18n._('Over'): 'DIGITOVER'
			}, {
				i18n._('Under'): 'DIGITUNDER'
			}],
		},

		opposites_have_barrier: [
			'MATCHESDIFFERS',
			'OVERUNDER',
		],

		conditions: ['updown', 'asian', 'matchesdiffers', 'evenodd', 'overunder'],
		ticktrade_markets: ['r_25', 'r_50', 'r_75', 'r_100', 'rdbear', 'rdbull'],
		ticktrade_market_names: [i18n._('Volatility 25 Index'), i18n._('Volatility 50 Index'), i18n._('Volatility 75 Index'), i18n._('Volatility 100 Index'), i18n._('Bear Market Index'), i18n._('Bull Market Index')],
	};
};