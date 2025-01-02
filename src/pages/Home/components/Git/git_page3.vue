<template>
  <h5 id="3%E3%80%81git%E5%B8%B8%E8%A7%81%E5%91%BD%E4%BB%A4">3、Git常用命令</h5>
  <p style="text-align: center">
    <img
      alt=""
      src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/06f3568de1cdd242e7eab2021cc3e75f.png"
    />
  </p>
  <blockquote>
    <p><strong>文字整理(可直接复制使用)</strong></p>
    <p>
      1、git config - - 可以配置git的参数，可以使用 git config
      --list查看已经配置的git参数。
    </p>
    <p>其中有三个级别的保存位置，</p>
    <ul>
      <li>–system（本系统）</li>
      <li>–global（当前用户，全局）</li>
      <li>–local（本地配置，当前目录）</li>
      <li>默认使用–local</li>
    </ul>
    <p>配置用户名及邮箱</p>
    <ul>
      <li>git config --global user.name “****”</li>
      <li>git config --global user.email 1********@qq.com</li>
    </ul>
    <p>2、git init - - 初始化代码仓库</p>
    <p>3、git clone - - 克隆远程仓库</p>
    <p>
      PS:如果希望在克隆的时候，自己定义要新建的项目目录名称，可以在上面的命令末尾指定新的名字：
    </p>
    <p>$ git clone git://github.com/schacon/grit.git mygrit</p>
    <p>4、git add - - 把需要提交的所有修改放到暂存区（Stage）</p>
    <ul>
      <li>git add file – 提交指定文件</li>
      <li>git add . || git add -A – 提交所有文件</li>
      <li>git add *.js – 提交所有.js格式文件</li>
      <li>git add -f file – 强制添加</li>
    </ul>
    <p>
      5、git diff - - 查看当前目录的所有修改(#当暂存区中没有文件时，git
      diff比较的是，工作区中的文件与上次提交到版本库中的文件。
    </p>
    <p>
      #当暂存区中有文件时，git diff则比较的是，当前工作区中的文件与暂存区中的文)
    </p>
    <ul>
      <li>
        git diff HEAD - - file –
        比较工作区中的文件与版本库中文件的差异。HEAD指向的是版本库中的当前版本，而file指的是当前工作区中的文件。
      </li>
    </ul>
    <p>6、git commit -m “message” - - 提交代码</p>
    <p>
      7、git rm - -
      会把文件从当前目录删除（不会保存删除的文件）。如果需要从Git仓库中删除，但保留在当前工作目录中，亦即从跟踪清单中删除，可以使用git
      rm -r --cached readme.md
    </p>
    <p>
      PS:如果一个文件已经被提交到版本库，那么你永远不用担心误删，但是要小心，你只能恢复文件到最新版本，你会丢失最近一次提交后你修改的内容。
    </p>
    <p>8、git log - - 查看历史记录，git log命令显示从最近到最远的提交日志</p>
    <ul>
      <li>git log --graph – 查看分支合并图</li>
    </ul>
    <p>9、git reflog - - 用来记录你的每一次命令</p>
    <p>10、git remote - - 查看当前的远程库</p>
    <p>
      11、git remote -v - - 可以显示对应的克隆地址（对于多个远程仓库很有用）
    </p>
    <p>12、git remote add [short_name][url] - - 可以添加新的远程仓库</p>
    <p>13、git remote add origin &lt; address &gt; - - 关联一个远程库</p>
    <p>
      14、git fetch [remote-name] - - 可以从远程仓库抓取数据到本地。【git fetch
      origin release/sprint-70】
    </p>
    <p>15、git pull - - 更新数据</p>
    <p>
      16、git push [remote_name] [branch_name] - - 推送数据到远程仓库
      默认使用origin和master
    </p>
    <p>
      17、git push -u origin master [-f] - -
      第一次将本地库的所有内容推送到远程库上
    </p>
    <p>18、git remote show origin - - 查看远程仓库信息</p>
    <p>19、git remote rename [old_name][new_name] - - 远程仓库重命名</p>
    <p>20、git remote rm [remote_name] - - 删除远程仓库</p>
    <p>21、git branch -d &lt; name &gt; - - 删除本地分支</p>
    <p>22、git tag - - 显示当前库中的标签</p>
    <p>
      23、git branch - -
      可显示当前所有分支。可以使用–merged和–no-merged查看已经合并、未合并的分支。
    </p>
    <p>24、git branch &lt;branch_name&gt; - - 创建新分支</p>
    <p>25、git branch -r - - 查看远程仓库分支</p>
    <p>26、git checkout &lt;branch_name&gt; - - 切换到指定的分支</p>
    <p>27、git checkout -b &lt;branch_name&gt; - - 创建新分支并切换到该分支</p>
    <p>28、git merge 合并分支</p>
    <p>举例：</p>
    <ul>
      <li>将hotfix分支合并到master上需要：</li>
      <li>git checkout master</li>
      <li>git merge hotfix</li>
      <li>合并之后可以使用git branch -d hotfix删除分支。</li>
      <li>如果合并时存在冲突，需要手工修改</li>
      <li>
        合并分支时，加上—no-ff参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并，而fast
        forward合并就看不出来曾经做过合并。
      </li>
    </ul>
    <p>29、git checkout . --恢复上次提交状态</p>
    <ul>
      <li>git checkout --file - - 文件在工作区的修改全部撤销</li>
      <li>
        一种是file修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；
      </li>
      <li>
        一种是file已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。
      </li>
    </ul>
    <p>
      30、git status –
      用于显示工作目录和暂存区的状态。使用此命令能看到那些修改被暂存到了,
      哪些没有, 哪些文件没有被Git tracked到。git
      status不显示已经commit到项目历史中去的信息。
    </p>
    <p>31、git reset --hard HEAD^ - - #版本回退</p>
    <ul>
      <li>
        git reset --hard commitId - - 取消回退，commitId为你想要回到的未来版本号
      </li>
      <li>
        PS:Git必须知道当前版本是哪个版本，在Git中，用HEAD表示当前版本，上一个版本就是HEAD，上上一个版本就是HEAD^，当回退版本较早时可以写成HEAD~100。
      </li>
    </ul>
    <p>
      32、git stash - -
      储藏可以获取你工作目录的中间状态——也就是你修改过的被追踪的文件和暂存的变更——并将它保存到一个未完结变更的堆栈中，随时可以重新应用。
    </p>
    <ul>
      <li>
        现在你想切换分支，但是你还不想提交你正在进行中的工作；所以你储藏这些变更。为了往堆栈推送一个新的储藏，只要运行git
        stash。把所有未提交的修改（包括暂存的和非暂存的）都保存起来，用于后续恢复当前工作目录。
      </li>
      <li>
        PS:需要说明一点，stash是本地的，不会通过git push命令上传到git server上。
      </li>
    </ul>
    <p>
      33、git stash list - - 查看现有的所有储藏，此命令显然暗示了git
      stash可以多次保存工作进度，并用在恢复时候选择。
    </p>
    <p>
      34、git stash pop [–index] [ &lt; stash &gt; ] - -
      重新应用已经实施的储藏（删除储藏）
    </p>
    <ul>
      <li>
        如果不使用任何参数，会恢复最新保存的工作进度，并将恢复的工作进度从存储的工作进度列表中清除。
      </li>
      <li>
        如果提供&lt; stash&gt;参数（来自git stash list显示的列表），则从该&lt;
        stash&gt;中恢复。恢复完毕也将从进度列表中删除&lt; stash&gt;。
      </li>
      <li>选项–index除了恢复工作区的文件外，还尝试恢复暂存区。</li>
    </ul>
    <p>
      35、git stash drop [&lt; stash &gt;] - -
      删除一个存储的进度。（默认删除最新的进度）
    </p>
    <p>36、git stash clear - - 清空当前所有的stash</p>
    <p>
      37、git stash branch &lt; branchname &gt; &lt; stash &gt; - -
      基于储藏进度创建分支。
    </p>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
