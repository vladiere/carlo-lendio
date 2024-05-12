import { Router } from "express";
import verifyToken from '../utils/verifyToken';
import { generateRandomString } from '../utils/generator';
import spotifyController from '../controllers/spotify.controller';

const router = Router();
router.post('/refresh', spotifyController.refresh);
router.post('/login', spotifyController.login);
router.post('/mysavedtracks', spotifyController.getMySavedTracks);

router.get('/search', spotifyController.search);
router.get('/play', spotifyController.play);

export default router;
