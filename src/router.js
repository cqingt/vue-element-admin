import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress"; // 路由动画,页面顶部加载条
// import { check, isLogin } from "./utils/auth";
import "nprogress/nprogress.css";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/user",
      //component: { render: h => h("router-view") }, // 不包含布局
      component: () =>
        import(/* webpackChunkName: "layouts" */ "./layouts/UserLayout"), //包含布局
      children: [
        {
          path: "/user",
          redirect: "/user/login"
        },
        {
          path: "/user/login",
          name: "login",
          component: () =>
            import(/* webpackChunkName: "login" */ "./views/User/Login.vue")
        },
        {
          path: "/user/register",
          name: "register",
          component: () =>
            import(/* webpackChunkName: "register" */ "./views/User/Register.vue")
        }
      ]
    },
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "layouts" */ "./layouts/BasicLayout"), //包含布局
      children: [
        {
          path: "/",
          redirect: "/dashboard/analysis"
        },
        {
          path: "/dashboard",
          name: "dashboard",
          meta: { icon: "dashboard", title: "仪表盘" },
          component: { render: h => h("router-view") },
          children: [
            {
              path: "/dashboard/analysis",
              name: "analysis",
              meta: { title: "分析页" },
              component: () =>
                import(/* webpackChunkName: "dashboard" */ "./views/Dashboard/Analysis")
            }
          ]
        }
      ]
    },
    {
      path: "/form",
      name: "form",
      component: { render: h => h("router-view") },
      meta: { icon: "form", title: "表单", authority: ["admin"] },
      children: [
        {
          path: "/form/basic-form",
          name: "basicform",
          meta: { title: "基础表单" },
          component: () =>
            import(/* webpackChunkName: "form" */ "./views/Forms/BasicForm")
        },
        {
          path: "/form/step-form",
          name: "stepform",
          hideChildrenInMenu: true,
          meta: { title: "分布表单" },
          component: () =>
            import(/* webpackChunkName: "form" */ "./views/Forms/StepForm/index"),
          children: [
            {
              path: "/form/step-form",
              redirect: "/form/step-form/info"
            },
            {
              path: "/form/step-form/info",
              name: "info",
              component: () =>
                import(/* webpackChunkName: "form" */ "./views/Forms/StepForm/Step1")
            },
            {
              path: "/form/step-form/confirm",
              name: "confirm",
              component: () =>
                import(/* webpackChunkName: "form" */ "./views/Forms/StepForm/Step2")
            },
            {
              path: "/form/step-form/result",
              name: "result",
              component: () =>
                import(/* webpackChunkName: "form" */ "./views/Forms/StepForm/Step3")
            }
          ]
        }
      ]
    },
    // Exception
    {
      path: "/exception",
      name: "exception",
      component: { render: h => h("router-view") },
      redirect: "/exception/403",
      meta: { title: "异常页", icon: "warning", authority: ["admin"] },
      children: [
        {
          path: "/exception/403",
          name: "403",
          component: () =>
            import(/* webpackChunkName: "exception" */ "@/views/Exception/403"),
          meta: { title: "403" }
        },
        {
          path: "/exception/404",
          name: "404",
          component: () =>
            import(/* webpackChunkName: "exception" */ "@/views/Exception/404"),
          meta: { title: "404" }
        },
        {
          path: "/exception/500",
          name: "500",
          component: () =>
            import(/* webpackChunkName: "exception" */ "@/views/Exception/500"),
          meta: { title: "500" }
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start();
  }
  next();
});

// // 权限验证
// router.beforeEach((to, from, next) => {
//   if (to.path !== from.path) {
//     NProgress.start();
//   }
//   const record = findLast(to.matched, record => record.meta.authority);
//   if (record && !check(record.meta.authority)) {
//     if (!isLogin() && to.path !== "/user/login") {
//       next({
//         path: "/user/login"
//       });
//     } else if (to.path !== "/403") {
//       notification.error({
//         message: "403",
//         description: "你没有权限访问，请联系管理员咨询。"
//       });
//       next({
//         path: "/403"
//       });
//     }
//     NProgress.done();
//   }

//   next();
// });

// 结束
router.afterEach(() => {
  NProgress.done();
});

export default router;
