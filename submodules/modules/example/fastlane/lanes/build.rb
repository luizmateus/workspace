lane :build do |options|
  branch = ENV["CI_COMMIT_BRANCH"]
  pkg = "latest"

  if branch != 'master'
    pkg = "rc"
  end

  Dir.chdir("..") do
    mobkPkgs = ""
    mobkPkgsVersion = ""
    package_json = JSON.parse(File.read("package.json"))
    package_json["dependencies"].each do |key, value|
      if key.include? "@mobk"
        mobkPkgs = "#{mobkPkgs} #{key}"
        mobkPkgsVersion = "#{mobkPkgsVersion} #{key}@#{pkg}"
      end
    end

    sh "yarn remove #{mobkPkgs}"
    sh "yarn"
    sh "yarn add #{mobkPkgsVersion}"
  end
end
