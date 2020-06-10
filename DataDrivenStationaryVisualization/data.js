const data = [
  {
    "time": "01/01/2020",
    "mood": -3,
    "sleep": 22.13333333,
    "wake": 8.45,
    "meds": 0,
    "irritability": 1,
    "cognitive": 0,
    "social": 2,
    "physical": -1,
    "stress": 1,
    "energy": -2,
    "talkative": -2,
    "delusion": 0
  },
  {
    "time": "01/02/2020",
    "mood": -3,
    "sleep": 23.01666667,
    "wake": 7.983333333,
    "meds": 0,
    "irritability": 1,
    "cognitive": 1,
    "social": -1,
    "physical": 3,
    "stress": 2,
    "energy": -2,
    "talkative": -3,
    "delusion": 1
  },
  {
    "time": "01/03/2020",
    "mood": -3,
    "sleep": 21.73333333,
    "wake": 11.05,
    "meds": 1,
    "irritability": 3,
    "cognitive": 2,
    "social": 2,
    "physical": 3,
    "stress": 1,
    "energy": 1,
    "talkative": 1,
    "delusion": 1
  },
  {
    "time": "01/04/2020",
    "mood": -3,
    "sleep": 20.75,
    "wake": 8.166666667,
    "meds": 1,
    "irritability": 1,
    "cognitive": 3,
    "social": 3,
    "physical": 3,
    "stress": 2,
    "energy": 1,
    "talkative": 3,
    "delusion": 2
  },
  {
    "time": "01/05/2020",
    "mood": -1,
    "sleep": 22.95,
    "wake": 10.06666667,
    "meds": 1,
    "irritability": 2,
    "cognitive": 3,
    "social": -3,
    "physical": -3,
    "stress": 1,
    "energy": -1,
    "talkative": 3,
    "delusion": 1
  },
  {
    "time": "01/06/2020",
    "mood": 0,
    "sleep": 23.91666667,
    "wake": 9.75,
    "meds": 1,
    "irritability": 1,
    "cognitive": 3,
    "social": 3,
    "physical": 3,
    "stress": 0,
    "energy": -2,
    "talkative": -2,
    "delusion": 2
  },
  {
    "time": "01/07/2020",
    "mood": -3,
    "sleep": 23.46666667,
    "wake": 8.05,
    "meds": 0,
    "irritability": 2,
    "cognitive": 1,
    "social": -3,
    "physical": 0,
    "stress": 3,
    "energy": 2,
    "talkative": -2,
    "delusion": 2
  },
  {
    "time": "01/08/2020",
    "mood": -2,
    "sleep": 21.66666667,
    "wake": 9.333333333,
    "meds": 1,
    "irritability": 1,
    "cognitive": 3,
    "social": -3,
    "physical": 0,
    "stress": 1,
    "energy": 2,
    "talkative": 2,
    "delusion": 0
  },
  {
    "time": "01/09/2020",
    "mood": 0,
    "sleep": 22.38333333,
    "wake": 6.383333333,
    "meds": 1,
    "irritability": 1,
    "cognitive": 3,
    "social": -2,
    "physical": -1,
    "stress": 0,
    "energy": 2,
    "talkative": 2,
    "delusion": 3
  },
  {
    "time": "01/10/2020",
    "mood": 1,
    "sleep": 22.7,
    "wake": 9.966666667,
    "meds": 0,
    "irritability": 2,
    "cognitive": 2,
    "social": 0,
    "physical": 1,
    "stress": 0,
    "energy": 3,
    "talkative": -3,
    "delusion": 1
  },
  {
    "time": "01/11/2020",
    "mood": -1,
    "sleep": 23.16666667,
    "wake": 9.366666667,
    "meds": 1,
    "irritability": 0,
    "cognitive": 3,
    "social": 2,
    "physical": 3,
    "stress": 0,
    "energy": 1,
    "talkative": -2,
    "delusion": 1
  },
  {
    "time": "01/12/2020",
    "mood": 1,
    "sleep": 23.65,
    "wake": 10.18333333,
    "meds": 0,
    "irritability": 1,
    "cognitive": 1,
    "social": -1,
    "physical": 0,
    "stress": 1,
    "energy": -3,
    "talkative": -2,
    "delusion": 3
  },
  {
    "time": "01/13/2020",
    "mood": -3,
    "sleep": 21.56666667,
    "wake": 7.416666667,
    "meds": 0,
    "irritability": 2,
    "cognitive": 1,
    "social": -2,
    "physical": 0,
    "stress": 2,
    "energy": 3,
    "talkative": -3,
    "delusion": 3
  },
  {
    "time": "01/14/2020",
    "mood": -3,
    "sleep": 20.98333333,
    "wake": 6.983333333,
    "meds": 1,
    "irritability": 3,
    "cognitive": 1,
    "social": -2,
    "physical": 2,
    "stress": 2,
    "energy": 3,
    "talkative": -1,
    "delusion": 1
  },
  {
    "time": "01/15/2020",
    "mood": 3,
    "sleep": 20.3,
    "wake": 6.033333333,
    "meds": 0,
    "irritability": 1,
    "cognitive": 0,
    "social": 2,
    "physical": 3,
    "stress": 2,
    "energy": -2,
    "talkative": -2,
    "delusion": 3
  },
  {
    "time": "01/16/2020",
    "mood": -2,
    "sleep": 21.03333333,
    "wake": 8.016666667,
    "meds": 1,
    "irritability": 1,
    "cognitive": 3,
    "social": -3,
    "physical": -1,
    "stress": 0,
    "energy": -3,
    "talkative": -3,
    "delusion": 3
  },
  {
    "time": "01/17/2020",
    "mood": -1,
    "sleep": 21.2,
    "wake": 7.283333333,
    "meds": 0,
    "irritability": 0,
    "cognitive": 1,
    "social": 3,
    "physical": 3,
    "stress": 0,
    "energy": -3,
    "talkative": -1,
    "delusion": 3
  },
  {
    "time": "01/18/2020",
    "mood": -2,
    "sleep": 23.38333333,
    "wake": 8.716666667,
    "meds": 0,
    "irritability": 0,
    "cognitive": 3,
    "social": 1,
    "physical": 2,
    "stress": 0,
    "energy": 2,
    "talkative": 1,
    "delusion": 0
  },
  {
    "time": "01/19/2020",
    "mood": 3,
    "sleep": 22.78333333,
    "wake": 7.583333333,
    "meds": 0,
    "irritability": 2,
    "cognitive": 2,
    "social": 0,
    "physical": 0,
    "stress": 2,
    "energy": -3,
    "talkative": 0,
    "delusion": 1
  },
  {
    "time": "01/20/2020",
    "mood": 0,
    "sleep": 21.8,
    "wake": 10.8,
    "meds": 1,
    "irritability": 3,
    "cognitive": 0,
    "social": -2,
    "physical": -1,
    "stress": 3,
    "energy": -1,
    "talkative": -1,
    "delusion": 2
  },
  {
    "time": "01/21/2020",
    "mood": 1,
    "sleep": 23.98333333,
    "wake": 11.56666667,
    "meds": 1,
    "irritability": 1,
    "cognitive": 1,
    "social": 3,
    "physical": -3,
    "stress": 0,
    "energy": 1,
    "talkative": 0,
    "delusion": 0
  },
  {
    "time": "01/22/2020",
    "mood": 3,
    "sleep": 20.08333333,
    "wake": 10.56666667,
    "meds": 0,
    "irritability": 1,
    "cognitive": 0,
    "social": 1,
    "physical": -3,
    "stress": 3,
    "energy": -1,
    "talkative": 2,
    "delusion": 0
  },
  {
    "time": "01/23/2020",
    "mood": 2,
    "sleep": 23.71666667,
    "wake": 8.716666667,
    "meds": 1,
    "irritability": 3,
    "cognitive": 0,
    "social": -3,
    "physical": -2,
    "stress": 0,
    "energy": 2,
    "talkative": 2,
    "delusion": 2
  },
  {
    "time": "01/24/2020",
    "mood": 2,
    "sleep": 21.21666667,
    "wake": 6.683333333,
    "meds": 1,
    "irritability": 1,
    "cognitive": 1,
    "social": -3,
    "physical": 0,
    "stress": 0,
    "energy": 3,
    "talkative": 1,
    "delusion": 3
  },
  {
    "time": "01/25/2020",
    "mood": 0,
    "sleep": 23.35,
    "wake": 11.66666667,
    "meds": 0,
    "irritability": 1,
    "cognitive": 1,
    "social": -3,
    "physical": -1,
    "stress": 2,
    "energy": 0,
    "talkative": -1,
    "delusion": 3
  },
  {
    "time": "01/26/2020",
    "mood": -2,
    "sleep": 20.91666667,
    "wake": 6.783333333,
    "meds": 0,
    "irritability": 3,
    "cognitive": 2,
    "social": 1,
    "physical": -3,
    "stress": 3,
    "energy": -1,
    "talkative": 1,
    "delusion": 0
  },
  {
    "time": "01/27/2020",
    "mood": -2,
    "sleep": 23.5,
    "wake": 9.683333333,
    "meds": 0,
    "irritability": 0,
    "cognitive": 0,
    "social": 0,
    "physical": -1,
    "stress": 3,
    "energy": 2,
    "talkative": 1,
    "delusion": 0
  },
  {
    "time": "01/28/2020",
    "mood": -1,
    "sleep": 22.08333333,
    "wake": 7.5,
    "meds": 1,
    "irritability": 1,
    "cognitive": 3,
    "social": 0,
    "physical": -1,
    "stress": 3,
    "energy": -2,
    "talkative": 2,
    "delusion": 3
  },
  {
    "time": "01/29/2020",
    "mood": -3,
    "sleep": 20.33333333,
    "wake": 11.4,
    "meds": 0,
    "irritability": 1,
    "cognitive": 1,
    "social": 0,
    "physical": -1,
    "stress": 0,
    "energy": -1,
    "talkative": 0,
    "delusion": 1
  },
  {
    "time": "01/30/2020",
    "mood": -2,
    "sleep": 23.25,
    "wake": 8.333333333,
    "meds": 1,
    "irritability": 2,
    "cognitive": 2,
    "social": 2,
    "physical": -1,
    "stress": 0,
    "energy": -1,
    "talkative": 3,
    "delusion": 3
  },
  {
    "time": "01/31/2020",
    "mood": 1,
    "sleep": 22.9,
    "wake": 9.283333333,
    "meds": 0,
    "irritability": 1,
    "cognitive": 3,
    "social": 1,
    "physical": -1,
    "stress": 3,
    "energy": 1,
    "talkative": -3,
    "delusion": 2
  }
]







