
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/polyfills.IegWBDja.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/app.BOmqmMx2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/OnePage.cVNDMIyU.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/DeliveryMethodSelectorSection.C1tf6Dsp.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/VaultedDeliveryAddress.BohHwppV.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/Rollup.BkFPtUVk.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/LegacyVaultedShippingMethods.CBDfsxza.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/SubscriptionPriceBreakdown.DbsqAkK5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/useUnauthenticatedErrorModal.CSs03nw_.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/ShopPayLogo.Dwk2cExY.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/PurchaseOptionsAgreement.xRsR-xpb.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/PickupPointCarrierLogo.BG8KkIK4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/hooks.BN58LkMT.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/VaultedPayment.DNqb3N21.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/Option.BGYfvJpF.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/OnePageModal.JnfVFM22.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/useShowShopPayOptin.Bonq4JgR.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/Section.DVnTk8x-.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/useGooglePaySdk.CCFc_bDG.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/PayButtonSection.C7izSq6M.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/context.cTaguMf9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/publishMessage.CRib6i2X.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/DutyOptions.B_vkkxB9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/useAmazonContact.CGm3ajEv.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/StockProblemsLineItemList.BtGALsQu.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/component-ShopPayVerificationSwitch.DzPjKaHr.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/index.By19aKZB.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/assets/app.DhHGJHcF.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/assets/OnePage.BL1uXB7_.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/assets/DeliveryMethodSelectorSection.B4_rfmEs.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/assets/Rollup.o9Mx-fKL.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/assets/SubscriptionPriceBreakdown.Bqs0s4oM.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/assets/useUnauthenticatedErrorModal.DnkQ4tsk.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/assets/ShopPayLogo.D_HPU8Dh.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/assets/PickupPointCarrierLogo.C0wRU6wV.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/assets/VaultedPayment.-UsM8FFz.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/assets/Option.CFr5yw-q.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/assets/Section.sQehCocD.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/assets/PayButtonSection.DF7trkKf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/assets/DutyOptions.Bd1Z60K2.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/assets/useAmazonContact.D-Ox6Dnf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/assets/StockProblemsLineItemList.CxdIQKjw.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/assets/ShopPayVerificationSwitch.CAxiAssW.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  