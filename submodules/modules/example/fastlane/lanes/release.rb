lane :release do |options|
  Dir.chdir("..") do
    sh "yarn release"
  end
end
