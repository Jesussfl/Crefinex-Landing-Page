module.exports = {
  // other next config
  i18n: {
    locales: ["en", "ms"],
    defaultLocale: "en",
  },
  env: {
    SPREADSHEET_ID: "1a8jdvxmxabo3P8BgJPaq8v4aAqQywbKdK8riEMWQbUc",
    SHEET_ID: "0",
    CLIENT_EMAIL:
      "crefinex-landing-page-service@temporal-storm-383720.iam.gserviceaccount.com",
    PRIVATE_KEY:
      "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC5T/9m9dOkYQfF\ngWNQXZhO+uNEt0sIfBwb7MMA/IeY8EhX1Zt0gc3sdcy+EMONrZhRPX6kWKflblY3\n1WLdJhAutj7V8ErSbT9wmspvceE4a29F55QDjFRcqLxPXoevayWfXb1l5HfkZazc\nNyKkExBXNuFMuKVVUSaT2jFvY2Di5KK2xHFsc1kbeFdGHOa67f+K8azrtiLkVKHT\n3ouVU3Aa8kMjTC/SGqgjVe3I42u1AQqAFbySXnyYBDBTqLoBOMgYgv2LMlg0jDDP\naKusgshTm/KIbSOBsaF7K7Rp+112/qvxwg55EsGvjs9/ienLgVBLh7l1k+sQCIn1\nJ1OWzLu9AgMBAAECggEACGnc5zBPER4Eq89xkmMFeMSEUAjgY7y6y/vGaMOOZn+2\nUSKWIcaI8mzwxEpfjo2spjecCdsqmEyXpoZOLEs/nddRaAY2Z3JlWHf2q/OoLZcX\nIL3gZv7Wj7RrhFD+6RR8y00GvdsPJHQHUqJANOHWspb/yKtzejmqfjkAWJXS/sod\n36BoBTUdkbiKyHnRLY96X7Stux0AWXMlg6+N4yyHBoLRu3qUEWl8adD136Ri0MaE\nsITrZN/w4H7Nbl4TDOZGQ/kHUfyJr3TcIyKfgJ65evvJugLT4oxKx1WrU28l1Ahb\nH175r7E/0wfneMN1Yvm+UC/RPWnAKQeZ26du42xr8wKBgQDcRcImASWqWS1HNQ3E\n3pHrjzTlQbZ86UyBKrox0brriDh8W2kg78FjrrdJqGO/GvVWpOeBLLtWneYGoHki\nwsPELpgLVBDXa9V05wYshaUtTqTftbEiD5nfVtHIFdsR3GARAQJwl8/X4VSp9mZk\ng9qRzz5dI2+ynyX76iPaGmpfZwKBgQDXXp2/uuABiiUp4Dme7LFubzFzPNePDmPj\nVN0mS380xYARhTmxPB9hVm6S3i+JDhRaKROnhNbrm2t496uIXKu4T1QvmciG76Qk\nZhqaD2a8/FakMr7wl+Pvxe5oTCuLIEK0mkYhBv5iXGHEFeZLCgnVKXc5XtUlqTdP\nWAiiEGzpOwKBgQCvWHCm5D7hjj+28YrWbv7l74gB//+PDAC0yhiSVAxiNnwQsovL\nhlACVDDf18YfeQxYPslzUPKIjwVvvQrxGu3QG+85BWCqu9KeTtHhWzoUCQjCdNZe\n8OBio7A3gP51B2MJ5i3VB2SSy3MkIVt9JGE3tSxF5FGkdYA9OzPzCRgofQKBgQCu\nV01js6c6F9ZVu8lpOTm4qBJjstDcYU3C7SPIqDzlPyuZAzvcmUrdxNXl1i6sx9T5\n116tsP854qpxVixpSntHzA/eKKMHeF5riKvoIqeMPMj2So3+vTYrFxMTIvXsvcTB\n5lD2026BuT77OK8f95RWFicJLhdlUUIQ3LbAWoOPmQKBgQDVgijcSNNH8szeIOld\n25z0U5LwvlgW2n2LJRAOHv8EAeeaqlVBd10yIHP0x3DdRpUmtUA6CRE8GSDuvF02\nZL1JWpm9tSbZYajyz9ReCVj6Xyg/Huue82fxHuZliUg2PikwbcdXh76TYa8NvfWu\nuH9y8ZQIm2fL5yrsw9RY+8ANyA==\n-----END PRIVATE KEY-----\n",
  },
  webpack: (config, options) => {
    config.node = {
      // Some libraries import Node modules but don't use them in the browser.
      // Tell Webpack to provide empty mocks for them so importing them works.
      ...config.node,
      fs: "empty",
      child_process: "empty",
      net: "empty",
      tls: "empty",
    };

    return config;
  },
};
