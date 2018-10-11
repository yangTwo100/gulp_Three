import Router from './utils/router'
import RouterMain from './utils/routerMain'
import homeController from './indexj/header'
import homeMainController from './indexj/home_main'
import homeRecomendController from './indexj/home_recommend'
import homeHotController from './indexj/home_hot'
import homeVedioController from './indexj/home_vedio'
import idea from './indexj/idea'
import collage from './indexj/collage'
import message from './indexj/message'
import mine from './indexj/mine'
import home_ibar from './indexj/home_main_ibar'

homeController.render();
homeController.ibar();
homeMainController.ibar();
home_ibar.ibar();

const router=new Router();
router.init();
router.route("#content",homeMainController.render);
router.route("#recomend",homeRecomendController.render);
router.route("#hot",homeHotController.render);
router.route("#vedio",homeVedioController.render);

const routerMain=new RouterMain();
routerMain.init();
routerMain.route("#main",homeMainController.render);
routerMain.route("#ides",idea.render);
routerMain.route("#collage",collage.render);
routerMain.route("#message",message.render);
routerMain.route("#mine",mine.render);