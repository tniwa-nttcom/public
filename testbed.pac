function FindProxyForURL(url, host) {
  if (shExpMatch(host, "100.100.96.*")
   || shExpMatch(host, "100.100.126.*")
   || shExpMatch(host, "161.2.2.*"))
  return "SOCKS5 10.64.31.235:18000"
  else return "DIRECT"
}
