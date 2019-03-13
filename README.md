# Maleficent

Maleficent is a demonstration of just how dangerous and easy it is to install malicious software.

Malicious code is targeting your development machine. It is targeting your CI/CD servers. It is targeting your Production servers.

You need to educate yourself and others of these dangers NOW and start a dialog about how to combat it.

# Trojan Horse

Maleficent disguises itself as a novelty Business Card app...

```
   ╭─────────────────────────────────────────────╮
   │                                             │
   │   Joel Thoms                                │
   │                                             │
   │       NPM: https://www.npmjs.com/~joelnet   │
   │    GitHub: https://github.com/joelnet       │
   │   Twitter: https://twitter.com/joelnet      │
   │     Email: jthoms+npm@gmail.com             │
   │                                             │
   │      Card: npx npmcard joelnet              │
   │                                             │
   ╰─────────────────────────────────────────────╯
```

But in the background, it is harvesting credentials from your machine.

For this demo, a file `maleficent.json` will be created in the directory in which it's run.

Run Malificent. View the json. Imagine what would happen if this ended up in the wrong hands.

# Run it. Do it.

To run Maleficent all you have to do is run a single command.

```bash
# Go ahead and run this. It's Totally safe. 😉
npx maleficent
```

NOTE: ☠️ Maleficent will not harm your computer. It will not steal your passwords or credentials. It will not send anything from your computer over the network. But if it wanted to... it could.

# What is harvested?

An example of what is contained within `maleficent.json`. Obfuscated for obvious reasons.

They key items are:
- All of your environment variables
- Your OS details
- Your Network Interface details
- Your AWS Credentials
- Your NPM Credentials
- Your SSH Keys

```javascript
{
  "env": {
    "LESSOPEN": "HIDDEN",
    "npm_config_cache_lock_stale": "HIDDEN",
    "npm_config_ham_it_up": "HIDDEN",
    "npm_config_legacy_bundling": "HIDDEN",
    "npm_config_sign_git_tag": "HIDDEN",
    "USER": "HIDDEN",
    "npm_config_user_agent": "HIDDEN",
    "npm_config_always_auth": "HIDDEN",
    "npm_config_bin_links": "HIDDEN",
    "npm_config_key": "HIDDEN",
    "npm_config_allow_same_version": "HIDDEN",
    "npm_config_description": "HIDDEN",
    "npm_config_fetch_retries": "HIDDEN",
    "npm_config_heading": "HIDDEN",
    "npm_config_if_present": "HIDDEN",
    "npm_config_init_version": "HIDDEN",
    "npm_config_user": "HIDDEN",
    "npm_node_execpath": "HIDDEN",
    "SHLVL": "HIDDEN",
    "npm_config_prefer_online": "HIDDEN",
    "npm_config_noproxy": "HIDDEN",
    "CHROME_DESKTOP": "HIDDEN",
    "HOME": "HIDDEN",
    "OLDPWD": "HIDDEN",
    "npm_config_force": "HIDDEN",
    "TERM_PROGRAM_VERSION": "HIDDEN",
    "npm_config_only": "HIDDEN",
    "npm_config_read_only": "HIDDEN",
    "GIO_LAUNCHED_DESKTOP_FILE": "HIDDEN",
    "npm_config_cache_min": "HIDDEN",
    "npm_config_init_license": "HIDDEN",
    "GTK_MODULES": "HIDDEN",
    "npm_config_editor": "HIDDEN",
    "npm_config_rollback": "HIDDEN",
    "npm_config_tag_version_prefix": "HIDDEN",
    "npm_config_cache_max": "HIDDEN",
    "npm_config_timing": "HIDDEN",
    "npm_config_userconfig": "HIDDEN",
    "DBUS_SESSION_BUS_ADDRESS": "HIDDEN",
    "npm_package_scripts_postinstall": "HIDDEN",
    "npm_config_engine_strict": "HIDDEN",
    "npm_config_init_author_name": "HIDDEN",
    "npm_config_init_author_url": "HIDDEN",
    "npm_config_preid": "HIDDEN",
    "npm_config_tmp": "HIDDEN",
    "GIO_LAUNCHED_DESKTOP_FILE_PID": "HIDDEN",
    "npm_package_description": "HIDDEN",
    "npm_config_depth": "HIDDEN",
    "npm_config_package_lock_only": "HIDDEN",
    "npm_config_save_dev": "HIDDEN",
    "npm_config_usage": "HIDDEN",
    "npm_package_readmeFilename": "HIDDEN",
    "npm_config_metrics_registry": "HIDDEN",
    "npm_config_cafile": "HIDDEN",
    "npm_config_otp": "HIDDEN",
    "npm_config_package_lock": "HIDDEN",
    "npm_config_progress": "HIDDEN",
    "npm_config_https_proxy": "HIDDEN",
    "npm_config_save_prod": "HIDDEN",
    "QT_QPA_PLATFORMTHEME": "HIDDEN",
    "npm_config_audit": "HIDDEN",
    "npm_config_cidr": "HIDDEN",
    "npm_config_onload_script": "HIDDEN",
    "npm_config_sso_type": "HIDDEN",
    "npm_config_rebuild_bundle": "HIDDEN",
    "npm_config_save_bundle": "HIDDEN",
    "npm_config_shell": "HIDDEN",
    "_": "HIDDEN",
    "npm_config_dry_run": "HIDDEN",
    "npm_config_prefix": "HIDDEN",
    "npm_package_scripts_lint": "HIDDEN",
    "npm_config_scope": "HIDDEN",
    "npm_config_browser": "HIDDEN",
    "npm_config_cache_lock_wait": "HIDDEN",
    "npm_config_ignore_prepublish": "HIDDEN",
    "npm_config_registry": "HIDDEN",
    "npm_config_save_optional": "HIDDEN",
    "npm_config_searchopts": "HIDDEN",
    "npm_config_versions": "HIDDEN",
    "XDG_SESSION_ID": "HIDDEN",
    "TERM": "HIDDEN",
    "GTK_OVERLAY_SCROLLING": "HIDDEN",
    "npm_package_dependencies_mojiscript": "HIDDEN",
    "npm_package_dependencies_npmcard": "HIDDEN",
    "npm_config_cache": "HIDDEN",
    "npm_config_proxy": "HIDDEN",
    "npm_config_send_metrics": "HIDDEN",
    "npm_package_scripts_start": "HIDDEN",
    "npm_config_global_style": "HIDDEN",
    "npm_config_ignore_scripts": "HIDDEN",
    "npm_config_version": "HIDDEN",
    "npm_config_local_address": "HIDDEN",
    "npm_config_viewer": "HIDDEN",
    "npm_config_node_gyp": "HIDDEN",
    "PATH": "HIDDEN",
    "SESSION_MANAGER": "HIDDEN",
    "npm_package_name": "HIDDEN",
    "npm_config_audit_level": "HIDDEN",
    "npm_config_prefer_offline": "HIDDEN",
    "NODE": "HIDDEN",
    "XDG_RUNTIME_DIR": "HIDDEN",
    "npm_config_color": "HIDDEN",
    "npm_config_sign_git_commit": "HIDDEN",
    "DISPLAY": "HIDDEN",
    "npm_config_fetch_retry_mintimeout": "HIDDEN",
    "npm_config_maxsockets": "HIDDEN",
    "npm_config_offline": "HIDDEN",
    "npm_config_sso_poll_frequency": "HIDDEN",
    "LANG": "HIDDEN",
    "XDG_CURRENT_DESKTOP": "HIDDEN",
    "npm_config_umask": "HIDDEN",
    "TERM_PROGRAM": "HIDDEN",
    "LS_COLORS": "HIDDEN",
    "npm_package_main": "HIDDEN",
    "npm_package_gitHead": "HIDDEN",
    "npm_config_fetch_retry_maxtimeout": "HIDDEN",
    "npm_config_loglevel": "HIDDEN",
    "npm_config_logs_max": "HIDDEN",
    "npm_config_message": "HIDDEN",
    "npm_lifecycle_script": "HIDDEN",
    "SSH_AUTH_SOCK": "HIDDEN",
    "UID": "HIDDEN",
    "npm_package_scripts_test": "HIDDEN",
    "npm_config_ca": "HIDDEN",
    "npm_config_cert": "HIDDEN",
    "npm_config_global": "HIDDEN",
    "npm_config_link": "HIDDEN",
    "SHELL": "HIDDEN",
    "NODE_PATH": "HIDDEN",
    "npm_package_version": "HIDDEN",
    "npm_config_access": "HIDDEN",
    "npm_config_also": "HIDDEN",
    "npm_config_save": "HIDDEN",
    "npm_config_unicode": "HIDDEN",
    "npm_lifecycle_event": "HIDDEN",
    "NO_AT_BRIDGE": "HIDDEN",
    "npm_config_argv": "HIDDEN",
    "npm_config_long": "HIDDEN",
    "npm_config_production": "HIDDEN",
    "npm_config_searchlimit": "HIDDEN",
    "npm_config_unsafe_perm": "HIDDEN",
    "npm_config_update_notifier": "HIDDEN",
    "LESSCLOSE": "HIDDEN",
    "npm_package_scripts_test_coverage": "HIDDEN",
    "npm_config_auth_type": "HIDDEN",
    "npm_config_node_version": "HIDDEN",
    "npm_config_tag": "HIDDEN",
    "npm_config_git_tag_version": "HIDDEN",
    "npm_config_commit_hooks": "HIDDEN",
    "npm_config_script_shell": "HIDDEN",
    "npm_config_shrinkwrap": "HIDDEN",
    "npm_package_license": "HIDDEN",
    "npm_config_fetch_retry_factor": "HIDDEN",
    "npm_config_save_exact": "HIDDEN",
    "npm_config_strict_ssl": "HIDDEN",
    "npm_config_dev": "HIDDEN",
    "npm_config_globalconfig": "HIDDEN",
    "npm_config_init_module": "HIDDEN",
    "npm_config_parseable": "HIDDEN",
    "PWD": "HIDDEN",
    "npm_config_globalignorefile": "HIDDEN",
    "npm_execpath": "HIDDEN",
    "XDG_DATA_DIRS": "HIDDEN",
    "npm_package_author_name": "HIDDEN",
    "npm_package_devDependencies_fs_extra": "HIDDEN",
    "npm_config_cache_lock_retries": "HIDDEN",
    "npm_config_searchstaleness": "HIDDEN",
    "npm_config_node_options": "HIDDEN",
    "npm_config_save_prefix": "HIDDEN",
    "npm_config_scripts_prepend_node_path": "HIDDEN",
    "MATE_DESKTOP_SESSION_ID": "HIDDEN",
    "npm_config_group": "HIDDEN",
    "npm_config_init_author_email": "HIDDEN",
    "npm_config_searchexclude": "HIDDEN",
    "npm_config_git": "HIDDEN",
    "npm_config_optional": "HIDDEN",
    "npm_config_json": "HIDDEN",
    "INIT_CWD": "HIDDEN"
  },
  "os": {
    "hostname": "HIDDEN",
    "platform": "HIDDEN",
    "release": "HIDDEN",
    "type": "HIDDEN",
    "arch": "HIDDEN",
    "userInfo": {
      "uid": "HIDDEN",
      "gid": "HIDDEN",
      "username": "HIDDEN",
      "homedir": "HIDDEN",
      "shell": "HIDDEN"
    },
    "networkInterfaces": "HIDDEN"
  },
  "aws": "HIDDEN",
  "npm": "HIDDEN",
  "ssh": [
    "HIDDEN",
    "HIDDEN",
    "HIDDEN",
    "HIDDEN",
    "HIDDEN",
    "HIDDEN"
  ]
}
```

# Why?

Hackers are already well aware of this attack vector. Programmers aren't. We need to educate ourselves before we become a news story.

# Solutions

Unfortunately, there aren't any perfect solutions.

- [synk](https://snyk.io) is a great tool to help detect vulnerabilities, but it can't protect you from this type of attack.

- Run your code in a virtual machine like Docker that doesn't contain sensitive info.

- Vetting your packages isn't possible. `node_modules` is currently out of control. Heck, `create-react-app` installs 1,839 packages (531M). Any one of these could contain an exploit.
