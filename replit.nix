{ pkgs }: {
    deps = [
      pkgs.nodePackages.prettier
      pkgs.tree
      pkgs.cowsay
    ];
}