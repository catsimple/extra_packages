include $(TOPDIR)/rules.mk

PKG_NAME:=luci-app-wifi-monitor
PKG_VERSION:=1.0
PKG_RELEASE:=1
PKG_PO_VERSION:=$(PKG_VERSION)-$(PKG_RELEASE)
PKG_MAINTAINER:=Catsimple

LUCI_TITLE:=LuCI Support for XIAOMI WR30U WiFi Monitor
LUCI_DEPENDS:=+luci-base +curl +ca-bundle +openssh-client +nlbwmon
LUCI_PKGARCH:=all

define Package/$(PKG_NAME)/postinst
#!/bin/sh
if [ -z "$${IPKG_INSTROOT}" ]; then
	chmod +x /usr/libexec/wifi/api_wifi_acl
	chmod +x /usr/libexec/wifi/api_wifi_json
	chmod +x /usr/libexec/wifi/api_wifi_router
	chmod +x /usr/libexec/wifi/get_vendor
fi
exit 0
endef

define Package/$(PKG_NAME)/install
	$(INSTALL_DIR) $(1)/etc/config
	$(INSTALL_CONF) ./root/etc/config/wifi_monitor $(1)/etc/config/

	$(INSTALL_DIR) $(1)/usr/lib/lua/luci/controller/admin
	$(INSTALL_DATA) ./root/usr/lib/lua/luci/controller/admin/wifi_monitor.lua $(1)/usr/lib/lua/luci/controller/admin/

	$(INSTALL_DIR) $(1)/usr/lib/lua/luci/view/admin_status
	$(INSTALL_DATA) ./root/usr/lib/lua/luci/view/admin_status/wifi_monitor.htm $(1)/usr/lib/lua/luci/view/admin_status/

	$(INSTALL_DIR) $(1)/usr/libexec/wifi
	$(INSTALL_BIN) ./root/usr/libexec/wifi/* $(1)/usr/libexec/wifi/

	$(INSTALL_DIR) $(1)/usr/share/rpcd/acl.d
	$(INSTALL_DATA) ./root/usr/share/rpcd/acl.d/luci-app-wifi-monitor.json $(1)/usr/share/rpcd/acl.d/
endef

include $(TOPDIR)/feeds/luci/luci.mk

# call BuildPackage - OpenWrt buildroot signature
