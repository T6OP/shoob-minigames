const request = require("request");
const io = require('socket.io-client');
var last_emmited = [];

const miniGameSocket = io('wss://shoob.gg/mini-games', {
  secure: true
});

miniGameSocket.on('connect', function() {
    console.log('Connected to Shoob MiniGames!');
});

miniGameSocket.on('disconnect', (reason) => {
    console.log("Disconnected: " + reason);
    console.log("Reconnecting...");
});

miniGameSocket.on("createminigameres",(data) => {
    console.log("New MiniGame Created:", data);
    sendDiscordNotification(data);
});

function sendDiscordNotification(data) {
    const webhookURL = 'https://discord.com/api/webhooks/1419321756300083220/aiweDnbGDj307Qv2etaY31N3h_dYKQB5R_eqTxf2w42KSFcGj2acCQUmhC3fEoPeTSNC';

    const em = {
        username: "Shoob MiniGames Tracker",
        avatar
