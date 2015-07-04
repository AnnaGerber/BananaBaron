/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');

// Get list of things
exports.index = function(req, res) {
  res.json([
    {
      "events": [
        {
           "heading": "Oh no! The Ghost Bat is now extinct!",
           "location": [-22, 149.4],
           "image": "",
           "description": "When animals' homes are destroyed, they have no place to live :(",
           "variations": [],
           "outcomes": []
         },
         {
            "heading": "A category 3 cyclone named Winifred has appeared!",
            "location": [16263778.0000, -1990781.8913 ],
            "description": "Cyclones are a huge threat every summer in Queensland. As well as destructive winds, cyclones also typically result in flooding, often over large areas.",
            "variations": [
              { "condition": "impact > 20",
                "then": { "money": -50 },
                "thenText": "As the sea temperature rises, cyclones get bigger and appear more often!"
              },
              { "condition": "preparation >= 20",
                "then": { "money": -50 },
                "thenText": "Good news! Your preparations meant the cyclone did less damage :)",
                "else": { "money": -100 },
                "elseText": "Oh no! By failing to prepare your supplies and your farm for the cyclone, your sustained more damage."
              }
            ]
          }
        ],
        "actions": [
          {
            "name": "Buy emergency rations",
            "description": "Stock up on bottled water and baked beans!",
            "moreInfo": "http://www.emergency.qld.gov.au/emq/css/beprepared.asp",
            "outcomes": [
              { "preparation": 10, "money": -10 }
            ]
          },
          {
            "name": "Buy torch, radio and batteries",
            "description": "A torch helps you see if the power goes out, and a radio lets you know when its safe to go outside again.",
            "moreInfo": "http://www.emergency.qld.gov.au/emq/css/beprepared.asp",
            "outcome": { "preparation": 10, "money": -10 }
          },
          {
            "name": "Prepare your home for a cyclone",
            "description": "If you clear things from your yard, then they won't fly around in the storm.",
            "moreInfo": "http://www.emergency.qld.gov.au/emq/css/beprepared.asp",
            "outcome": { "preparation": 10}
          },
          {
            "name": "Turn off your air-conditioning",
            "description": "The air-conditioner uses lots of energy, which costs you money and impacts the environment.",
            "moreInfo": "http://www.yourhome.gov.au/energy",
            "outcome": { "impact": -10, "money": 10 }
        }
        ]
    }
  ]);
};