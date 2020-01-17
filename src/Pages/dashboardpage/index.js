import React from "react";
import Box from "../../Components/Box/index";
import ColumnChart from '../../Components/Charts/ColumnChart'
import PieChart from '../../Components/Charts/PieChart'
import BarChart from '../../Components/Charts/BarChart'
import DateTimeChart from '../../Components/Charts/DateTimeChart'
import ContactChip from '../../Components/ContactChip/index'
import RepoDescription from '../../Components/RepoDescription/index'
import "./style.css";
class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      result: {
        id: 21924882,
        node_id: "MDEwOlJlcG9zaXRvcnkyMTkyNDg4Mg==",
        name: "Starscream",
        full_name: "daltoniam/Starscream",
        private: false,
        owner: {
          login: "daltoniam",
          id: 905059,
          node_id: "MDQ6VXNlcjkwNTA1OQ==",
          avatar_url: "https://avatars3.githubusercontent.com/u/905059?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/daltoniam",
          html_url: "https://github.com/daltoniam",
          followers_url: "https://api.github.com/users/daltoniam/followers",
          following_url:
            "https://api.github.com/users/daltoniam/following{/other_user}",
          gists_url: "https://api.github.com/users/daltoniam/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/daltoniam/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/daltoniam/subscriptions",
          organizations_url: "https://api.github.com/users/daltoniam/orgs",
          repos_url: "https://api.github.com/users/daltoniam/repos",
          events_url: "https://api.github.com/users/daltoniam/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/daltoniam/received_events",
          type: "User",
          site_admin: false
        },
        html_url: "https://github.com/daltoniam/Starscream",
        description: "Websockets in swift for iOS and OSX",
        fork: false,
        url: "https://api.github.com/repos/daltoniam/Starscream",
        forks_url: "https://api.github.com/repos/daltoniam/Starscream/forks",
        keys_url:
          "https://api.github.com/repos/daltoniam/Starscream/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/daltoniam/Starscream/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/daltoniam/Starscream/teams",
        hooks_url: "https://api.github.com/repos/daltoniam/Starscream/hooks",
        issue_events_url:
          "https://api.github.com/repos/daltoniam/Starscream/issues/events{/number}",
        events_url: "https://api.github.com/repos/daltoniam/Starscream/events",
        assignees_url:
          "https://api.github.com/repos/daltoniam/Starscream/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/daltoniam/Starscream/branches{/branch}",
        tags_url: "https://api.github.com/repos/daltoniam/Starscream/tags",
        blobs_url:
          "https://api.github.com/repos/daltoniam/Starscream/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/daltoniam/Starscream/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/daltoniam/Starscream/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/daltoniam/Starscream/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/daltoniam/Starscream/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/daltoniam/Starscream/languages",
        stargazers_url:
          "https://api.github.com/repos/daltoniam/Starscream/stargazers",
        contributors_url:
          "https://api.github.com/repos/daltoniam/Starscream/contributors",
        subscribers_url:
          "https://api.github.com/repos/daltoniam/Starscream/subscribers",
        subscription_url:
          "https://api.github.com/repos/daltoniam/Starscream/subscription",
        commits_url:
          "https://api.github.com/repos/daltoniam/Starscream/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/daltoniam/Starscream/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/daltoniam/Starscream/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/daltoniam/Starscream/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/daltoniam/Starscream/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/daltoniam/Starscream/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/daltoniam/Starscream/merges",
        archive_url:
          "https://api.github.com/repos/daltoniam/Starscream/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/daltoniam/Starscream/downloads",
        issues_url:
          "https://api.github.com/repos/daltoniam/Starscream/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/daltoniam/Starscream/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/daltoniam/Starscream/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/daltoniam/Starscream/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/daltoniam/Starscream/labels{/name}",
        releases_url:
          "https://api.github.com/repos/daltoniam/Starscream/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/daltoniam/Starscream/deployments",
        created_at: "2014-07-17T01:52:40Z",
        updated_at: "2020-01-17T03:36:44Z",
        pushed_at: "2020-01-13T20:46:08Z",
        git_url: "git://github.com/daltoniam/Starscream.git",
        ssh_url: "git@github.com:daltoniam/Starscream.git",
        clone_url: "https://github.com/daltoniam/Starscream.git",
        svn_url: "https://github.com/daltoniam/Starscream",
        homepage: null,
        size: 2473,
        stargazers_count: 5519,
        watchers_count: 5519,
        language: "Swift",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 671,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 39,
        license: {
          key: "apache-2.0",
          name: "Apache License 2.0",
          spdx_id: "Apache-2.0",
          url: "https://api.github.com/licenses/apache-2.0",
          node_id: "MDc6TGljZW5zZTI="
        },
        forks: 671,
        open_issues: 39,
        watchers: 5519,
        default_branch: "master",
        temp_clone_token: null,
        network_count: 671,
        subscribers_count: 137
      },
      languages: {
        Swift: 108014,
        Ruby: 7314,
        "Objective-C": 510,
        Shell: 281
      },
      
      contributors: [
        {
          login: "daltoniam",
          id: 905059,
          node_id: "MDQ6VXNlcjkwNTA1OQ==",
          avatar_url: "https://avatars3.githubusercontent.com/u/905059?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/daltoniam",
          html_url: "https://github.com/daltoniam",
          followers_url: "https://api.github.com/users/daltoniam/followers",
          following_url:
            "https://api.github.com/users/daltoniam/following{/other_user}",
          gists_url: "https://api.github.com/users/daltoniam/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/daltoniam/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/daltoniam/subscriptions",
          organizations_url: "https://api.github.com/users/daltoniam/orgs",
          repos_url: "https://api.github.com/users/daltoniam/repos",
          events_url: "https://api.github.com/users/daltoniam/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/daltoniam/received_events",
          type: "User",
          site_admin: false,
          contributions: 307
        },
        {
          login: "fassko",
          id: 29482,
          node_id: "MDQ6VXNlcjI5NDgy",
          avatar_url: "https://avatars1.githubusercontent.com/u/29482?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/fassko",
          html_url: "https://github.com/fassko",
          followers_url: "https://api.github.com/users/fassko/followers",
          following_url:
            "https://api.github.com/users/fassko/following{/other_user}",
          gists_url: "https://api.github.com/users/fassko/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/fassko/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/fassko/subscriptions",
          organizations_url: "https://api.github.com/users/fassko/orgs",
          repos_url: "https://api.github.com/users/fassko/repos",
          events_url: "https://api.github.com/users/fassko/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/fassko/received_events",
          type: "User",
          site_admin: false,
          contributions: 31
        },
        {
          login: "acmacalister",
          id: 1024755,
          node_id: "MDQ6VXNlcjEwMjQ3NTU=",
          avatar_url: "https://avatars2.githubusercontent.com/u/1024755?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/acmacalister",
          html_url: "https://github.com/acmacalister",
          followers_url: "https://api.github.com/users/acmacalister/followers",
          following_url:
            "https://api.github.com/users/acmacalister/following{/other_user}",
          gists_url:
            "https://api.github.com/users/acmacalister/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/acmacalister/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/acmacalister/subscriptions",
          organizations_url: "https://api.github.com/users/acmacalister/orgs",
          repos_url: "https://api.github.com/users/acmacalister/repos",
          events_url:
            "https://api.github.com/users/acmacalister/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/acmacalister/received_events",
          type: "User",
          site_admin: false,
          contributions: 20
        },
        {
          login: "delba",
          id: 2891970,
          node_id: "MDQ6VXNlcjI4OTE5NzA=",
          avatar_url: "https://avatars0.githubusercontent.com/u/2891970?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/delba",
          html_url: "https://github.com/delba",
          followers_url: "https://api.github.com/users/delba/followers",
          following_url:
            "https://api.github.com/users/delba/following{/other_user}",
          gists_url: "https://api.github.com/users/delba/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/delba/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/delba/subscriptions",
          organizations_url: "https://api.github.com/users/delba/orgs",
          repos_url: "https://api.github.com/users/delba/repos",
          events_url: "https://api.github.com/users/delba/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/delba/received_events",
          type: "User",
          site_admin: false,
          contributions: 12
        },
        {
          login: "jnross",
          id: 798990,
          node_id: "MDQ6VXNlcjc5ODk5MA==",
          avatar_url: "https://avatars3.githubusercontent.com/u/798990?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jnross",
          html_url: "https://github.com/jnross",
          followers_url: "https://api.github.com/users/jnross/followers",
          following_url:
            "https://api.github.com/users/jnross/following{/other_user}",
          gists_url: "https://api.github.com/users/jnross/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jnross/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jnross/subscriptions",
          organizations_url: "https://api.github.com/users/jnross/orgs",
          repos_url: "https://api.github.com/users/jnross/repos",
          events_url: "https://api.github.com/users/jnross/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jnross/received_events",
          type: "User",
          site_admin: false,
          contributions: 7
        },
        {
          login: "nuclearace",
          id: 1211049,
          node_id: "MDQ6VXNlcjEyMTEwNDk=",
          avatar_url: "https://avatars0.githubusercontent.com/u/1211049?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/nuclearace",
          html_url: "https://github.com/nuclearace",
          followers_url: "https://api.github.com/users/nuclearace/followers",
          following_url:
            "https://api.github.com/users/nuclearace/following{/other_user}",
          gists_url: "https://api.github.com/users/nuclearace/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/nuclearace/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/nuclearace/subscriptions",
          organizations_url: "https://api.github.com/users/nuclearace/orgs",
          repos_url: "https://api.github.com/users/nuclearace/repos",
          events_url:
            "https://api.github.com/users/nuclearace/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/nuclearace/received_events",
          type: "User",
          site_admin: false,
          contributions: 7
        },
        {
          login: "lbanders",
          id: 3657054,
          node_id: "MDQ6VXNlcjM2NTcwNTQ=",
          avatar_url: "https://avatars0.githubusercontent.com/u/3657054?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/lbanders",
          html_url: "https://github.com/lbanders",
          followers_url: "https://api.github.com/users/lbanders/followers",
          following_url:
            "https://api.github.com/users/lbanders/following{/other_user}",
          gists_url: "https://api.github.com/users/lbanders/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/lbanders/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/lbanders/subscriptions",
          organizations_url: "https://api.github.com/users/lbanders/orgs",
          repos_url: "https://api.github.com/users/lbanders/repos",
          events_url: "https://api.github.com/users/lbanders/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/lbanders/received_events",
          type: "User",
          site_admin: false,
          contributions: 6
        },
        {
          login: "turbulem",
          id: 4745892,
          node_id: "MDQ6VXNlcjQ3NDU4OTI=",
          avatar_url: "https://avatars3.githubusercontent.com/u/4745892?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/turbulem",
          html_url: "https://github.com/turbulem",
          followers_url: "https://api.github.com/users/turbulem/followers",
          following_url:
            "https://api.github.com/users/turbulem/following{/other_user}",
          gists_url: "https://api.github.com/users/turbulem/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/turbulem/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/turbulem/subscriptions",
          organizations_url: "https://api.github.com/users/turbulem/orgs",
          repos_url: "https://api.github.com/users/turbulem/repos",
          events_url: "https://api.github.com/users/turbulem/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/turbulem/received_events",
          type: "User",
          site_admin: false,
          contributions: 4
        },
        {
          login: "Abizern",
          id: 6902,
          node_id: "MDQ6VXNlcjY5MDI=",
          avatar_url: "https://avatars1.githubusercontent.com/u/6902?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Abizern",
          html_url: "https://github.com/Abizern",
          followers_url: "https://api.github.com/users/Abizern/followers",
          following_url:
            "https://api.github.com/users/Abizern/following{/other_user}",
          gists_url: "https://api.github.com/users/Abizern/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Abizern/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Abizern/subscriptions",
          organizations_url: "https://api.github.com/users/Abizern/orgs",
          repos_url: "https://api.github.com/users/Abizern/repos",
          events_url: "https://api.github.com/users/Abizern/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Abizern/received_events",
          type: "User",
          site_admin: false,
          contributions: 3
        },
        {
          login: "noremac",
          id: 2042645,
          node_id: "MDQ6VXNlcjIwNDI2NDU=",
          avatar_url: "https://avatars3.githubusercontent.com/u/2042645?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/noremac",
          html_url: "https://github.com/noremac",
          followers_url: "https://api.github.com/users/noremac/followers",
          following_url:
            "https://api.github.com/users/noremac/following{/other_user}",
          gists_url: "https://api.github.com/users/noremac/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/noremac/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/noremac/subscriptions",
          organizations_url: "https://api.github.com/users/noremac/orgs",
          repos_url: "https://api.github.com/users/noremac/repos",
          events_url: "https://api.github.com/users/noremac/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/noremac/received_events",
          type: "User",
          site_admin: false,
          contributions: 3
        },
        {
          login: "hishnash",
          id: 838127,
          node_id: "MDQ6VXNlcjgzODEyNw==",
          avatar_url: "https://avatars0.githubusercontent.com/u/838127?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/hishnash",
          html_url: "https://github.com/hishnash",
          followers_url: "https://api.github.com/users/hishnash/followers",
          following_url:
            "https://api.github.com/users/hishnash/following{/other_user}",
          gists_url: "https://api.github.com/users/hishnash/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/hishnash/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/hishnash/subscriptions",
          organizations_url: "https://api.github.com/users/hishnash/orgs",
          repos_url: "https://api.github.com/users/hishnash/repos",
          events_url: "https://api.github.com/users/hishnash/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/hishnash/received_events",
          type: "User",
          site_admin: false,
          contributions: 3
        },
        {
          login: "dreymonde",
          id: 17236908,
          node_id: "MDQ6VXNlcjE3MjM2OTA4",
          avatar_url: "https://avatars1.githubusercontent.com/u/17236908?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/dreymonde",
          html_url: "https://github.com/dreymonde",
          followers_url: "https://api.github.com/users/dreymonde/followers",
          following_url:
            "https://api.github.com/users/dreymonde/following{/other_user}",
          gists_url: "https://api.github.com/users/dreymonde/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/dreymonde/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/dreymonde/subscriptions",
          organizations_url: "https://api.github.com/users/dreymonde/orgs",
          repos_url: "https://api.github.com/users/dreymonde/repos",
          events_url: "https://api.github.com/users/dreymonde/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/dreymonde/received_events",
          type: "User",
          site_admin: false,
          contributions: 3
        },
        {
          login: "thebehera",
          id: 2779689,
          node_id: "MDQ6VXNlcjI3Nzk2ODk=",
          avatar_url: "https://avatars3.githubusercontent.com/u/2779689?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/thebehera",
          html_url: "https://github.com/thebehera",
          followers_url: "https://api.github.com/users/thebehera/followers",
          following_url:
            "https://api.github.com/users/thebehera/following{/other_user}",
          gists_url: "https://api.github.com/users/thebehera/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/thebehera/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/thebehera/subscriptions",
          organizations_url: "https://api.github.com/users/thebehera/orgs",
          repos_url: "https://api.github.com/users/thebehera/repos",
          events_url: "https://api.github.com/users/thebehera/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/thebehera/received_events",
          type: "User",
          site_admin: false,
          contributions: 3
        },
        {
          login: "thbaja",
          id: 4272286,
          node_id: "MDQ6VXNlcjQyNzIyODY=",
          avatar_url: "https://avatars0.githubusercontent.com/u/4272286?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/thbaja",
          html_url: "https://github.com/thbaja",
          followers_url: "https://api.github.com/users/thbaja/followers",
          following_url:
            "https://api.github.com/users/thbaja/following{/other_user}",
          gists_url: "https://api.github.com/users/thbaja/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/thbaja/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/thbaja/subscriptions",
          organizations_url: "https://api.github.com/users/thbaja/orgs",
          repos_url: "https://api.github.com/users/thbaja/repos",
          events_url: "https://api.github.com/users/thbaja/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/thbaja/received_events",
          type: "User",
          site_admin: false,
          contributions: 3
        },
        {
          login: "mqshen",
          id: 687580,
          node_id: "MDQ6VXNlcjY4NzU4MA==",
          avatar_url: "https://avatars3.githubusercontent.com/u/687580?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/mqshen",
          html_url: "https://github.com/mqshen",
          followers_url: "https://api.github.com/users/mqshen/followers",
          following_url:
            "https://api.github.com/users/mqshen/following{/other_user}",
          gists_url: "https://api.github.com/users/mqshen/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/mqshen/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/mqshen/subscriptions",
          organizations_url: "https://api.github.com/users/mqshen/orgs",
          repos_url: "https://api.github.com/users/mqshen/repos",
          events_url: "https://api.github.com/users/mqshen/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/mqshen/received_events",
          type: "User",
          site_admin: false,
          contributions: 3
        },
        {
          login: "winsmith",
          id: 954120,
          node_id: "MDQ6VXNlcjk1NDEyMA==",
          avatar_url: "https://avatars3.githubusercontent.com/u/954120?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/winsmith",
          html_url: "https://github.com/winsmith",
          followers_url: "https://api.github.com/users/winsmith/followers",
          following_url:
            "https://api.github.com/users/winsmith/following{/other_user}",
          gists_url: "https://api.github.com/users/winsmith/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/winsmith/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/winsmith/subscriptions",
          organizations_url: "https://api.github.com/users/winsmith/orgs",
          repos_url: "https://api.github.com/users/winsmith/repos",
          events_url: "https://api.github.com/users/winsmith/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/winsmith/received_events",
          type: "User",
          site_admin: false,
          contributions: 3
        },
        {
          login: "adamkaplan",
          id: 727953,
          node_id: "MDQ6VXNlcjcyNzk1Mw==",
          avatar_url: "https://avatars1.githubusercontent.com/u/727953?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/adamkaplan",
          html_url: "https://github.com/adamkaplan",
          followers_url: "https://api.github.com/users/adamkaplan/followers",
          following_url:
            "https://api.github.com/users/adamkaplan/following{/other_user}",
          gists_url: "https://api.github.com/users/adamkaplan/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/adamkaplan/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/adamkaplan/subscriptions",
          organizations_url: "https://api.github.com/users/adamkaplan/orgs",
          repos_url: "https://api.github.com/users/adamkaplan/repos",
          events_url:
            "https://api.github.com/users/adamkaplan/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/adamkaplan/received_events",
          type: "User",
          site_admin: false,
          contributions: 2
        },
        {
          login: "AndrewGene",
          id: 996890,
          node_id: "MDQ6VXNlcjk5Njg5MA==",
          avatar_url: "https://avatars2.githubusercontent.com/u/996890?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/AndrewGene",
          html_url: "https://github.com/AndrewGene",
          followers_url: "https://api.github.com/users/AndrewGene/followers",
          following_url:
            "https://api.github.com/users/AndrewGene/following{/other_user}",
          gists_url: "https://api.github.com/users/AndrewGene/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/AndrewGene/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/AndrewGene/subscriptions",
          organizations_url: "https://api.github.com/users/AndrewGene/orgs",
          repos_url: "https://api.github.com/users/AndrewGene/repos",
          events_url:
            "https://api.github.com/users/AndrewGene/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/AndrewGene/received_events",
          type: "User",
          site_admin: false,
          contributions: 2
        },
        {
          login: "chitowncrispy",
          id: 1864955,
          node_id: "MDQ6VXNlcjE4NjQ5NTU=",
          avatar_url: "https://avatars3.githubusercontent.com/u/1864955?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chitowncrispy",
          html_url: "https://github.com/chitowncrispy",
          followers_url: "https://api.github.com/users/chitowncrispy/followers",
          following_url:
            "https://api.github.com/users/chitowncrispy/following{/other_user}",
          gists_url:
            "https://api.github.com/users/chitowncrispy/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chitowncrispy/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chitowncrispy/subscriptions",
          organizations_url: "https://api.github.com/users/chitowncrispy/orgs",
          repos_url: "https://api.github.com/users/chitowncrispy/repos",
          events_url:
            "https://api.github.com/users/chitowncrispy/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chitowncrispy/received_events",
          type: "User",
          site_admin: false,
          contributions: 2
        },
        {
          login: "danbev",
          id: 432351,
          node_id: "MDQ6VXNlcjQzMjM1MQ==",
          avatar_url: "https://avatars3.githubusercontent.com/u/432351?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/danbev",
          html_url: "https://github.com/danbev",
          followers_url: "https://api.github.com/users/danbev/followers",
          following_url:
            "https://api.github.com/users/danbev/following{/other_user}",
          gists_url: "https://api.github.com/users/danbev/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/danbev/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/danbev/subscriptions",
          organizations_url: "https://api.github.com/users/danbev/orgs",
          repos_url: "https://api.github.com/users/danbev/repos",
          events_url: "https://api.github.com/users/danbev/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/danbev/received_events",
          type: "User",
          site_admin: false,
          contributions: 2
        },
        {
          login: "dancasimiro",
          id: 2293204,
          node_id: "MDQ6VXNlcjIyOTMyMDQ=",
          avatar_url: "https://avatars2.githubusercontent.com/u/2293204?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/dancasimiro",
          html_url: "https://github.com/dancasimiro",
          followers_url: "https://api.github.com/users/dancasimiro/followers",
          following_url:
            "https://api.github.com/users/dancasimiro/following{/other_user}",
          gists_url: "https://api.github.com/users/dancasimiro/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/dancasimiro/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/dancasimiro/subscriptions",
          organizations_url: "https://api.github.com/users/dancasimiro/orgs",
          repos_url: "https://api.github.com/users/dancasimiro/repos",
          events_url:
            "https://api.github.com/users/dancasimiro/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/dancasimiro/received_events",
          type: "User",
          site_admin: false,
          contributions: 2
        },
        {
          login: "Ewg777",
          id: 4364379,
          node_id: "MDQ6VXNlcjQzNjQzNzk=",
          avatar_url: "https://avatars2.githubusercontent.com/u/4364379?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Ewg777",
          html_url: "https://github.com/Ewg777",
          followers_url: "https://api.github.com/users/Ewg777/followers",
          following_url:
            "https://api.github.com/users/Ewg777/following{/other_user}",
          gists_url: "https://api.github.com/users/Ewg777/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Ewg777/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Ewg777/subscriptions",
          organizations_url: "https://api.github.com/users/Ewg777/orgs",
          repos_url: "https://api.github.com/users/Ewg777/repos",
          events_url: "https://api.github.com/users/Ewg777/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Ewg777/received_events",
          type: "User",
          site_admin: false,
          contributions: 2
        },
        {
          login: "steven851007",
          id: 1866462,
          node_id: "MDQ6VXNlcjE4NjY0NjI=",
          avatar_url: "https://avatars0.githubusercontent.com/u/1866462?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/steven851007",
          html_url: "https://github.com/steven851007",
          followers_url: "https://api.github.com/users/steven851007/followers",
          following_url:
            "https://api.github.com/users/steven851007/following{/other_user}",
          gists_url:
            "https://api.github.com/users/steven851007/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/steven851007/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/steven851007/subscriptions",
          organizations_url: "https://api.github.com/users/steven851007/orgs",
          repos_url: "https://api.github.com/users/steven851007/repos",
          events_url:
            "https://api.github.com/users/steven851007/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/steven851007/received_events",
          type: "User",
          site_admin: false,
          contributions: 2
        },
        {
          login: "koke",
          id: 8739,
          node_id: "MDQ6VXNlcjg3Mzk=",
          avatar_url: "https://avatars1.githubusercontent.com/u/8739?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/koke",
          html_url: "https://github.com/koke",
          followers_url: "https://api.github.com/users/koke/followers",
          following_url:
            "https://api.github.com/users/koke/following{/other_user}",
          gists_url: "https://api.github.com/users/koke/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/koke/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/koke/subscriptions",
          organizations_url: "https://api.github.com/users/koke/orgs",
          repos_url: "https://api.github.com/users/koke/repos",
          events_url: "https://api.github.com/users/koke/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/koke/received_events",
          type: "User",
          site_admin: false,
          contributions: 2
        },
        {
          login: "lukkas",
          id: 3305872,
          node_id: "MDQ6VXNlcjMzMDU4NzI=",
          avatar_url: "https://avatars2.githubusercontent.com/u/3305872?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/lukkas",
          html_url: "https://github.com/lukkas",
          followers_url: "https://api.github.com/users/lukkas/followers",
          following_url:
            "https://api.github.com/users/lukkas/following{/other_user}",
          gists_url: "https://api.github.com/users/lukkas/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/lukkas/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/lukkas/subscriptions",
          organizations_url: "https://api.github.com/users/lukkas/orgs",
          repos_url: "https://api.github.com/users/lukkas/repos",
          events_url: "https://api.github.com/users/lukkas/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/lukkas/received_events",
          type: "User",
          site_admin: false,
          contributions: 2
        },
        {
          login: "MaherKSantina",
          id: 24646608,
          node_id: "MDQ6VXNlcjI0NjQ2NjA4",
          avatar_url: "https://avatars2.githubusercontent.com/u/24646608?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/MaherKSantina",
          html_url: "https://github.com/MaherKSantina",
          followers_url: "https://api.github.com/users/MaherKSantina/followers",
          following_url:
            "https://api.github.com/users/MaherKSantina/following{/other_user}",
          gists_url:
            "https://api.github.com/users/MaherKSantina/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/MaherKSantina/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/MaherKSantina/subscriptions",
          organizations_url: "https://api.github.com/users/MaherKSantina/orgs",
          repos_url: "https://api.github.com/users/MaherKSantina/repos",
          events_url:
            "https://api.github.com/users/MaherKSantina/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/MaherKSantina/received_events",
          type: "User",
          site_admin: false,
          contributions: 2
        },
        {
          login: "MuniekMg",
          id: 6872134,
          node_id: "MDQ6VXNlcjY4NzIxMzQ=",
          avatar_url: "https://avatars2.githubusercontent.com/u/6872134?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/MuniekMg",
          html_url: "https://github.com/MuniekMg",
          followers_url: "https://api.github.com/users/MuniekMg/followers",
          following_url:
            "https://api.github.com/users/MuniekMg/following{/other_user}",
          gists_url: "https://api.github.com/users/MuniekMg/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/MuniekMg/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/MuniekMg/subscriptions",
          organizations_url: "https://api.github.com/users/MuniekMg/orgs",
          repos_url: "https://api.github.com/users/MuniekMg/repos",
          events_url: "https://api.github.com/users/MuniekMg/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/MuniekMg/received_events",
          type: "User",
          site_admin: false,
          contributions: 2
        },
        {
          login: "nicolasbigot",
          id: 3419988,
          node_id: "MDQ6VXNlcjM0MTk5ODg=",
          avatar_url: "https://avatars3.githubusercontent.com/u/3419988?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/nicolasbigot",
          html_url: "https://github.com/nicolasbigot",
          followers_url: "https://api.github.com/users/nicolasbigot/followers",
          following_url:
            "https://api.github.com/users/nicolasbigot/following{/other_user}",
          gists_url:
            "https://api.github.com/users/nicolasbigot/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/nicolasbigot/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/nicolasbigot/subscriptions",
          organizations_url: "https://api.github.com/users/nicolasbigot/orgs",
          repos_url: "https://api.github.com/users/nicolasbigot/repos",
          events_url:
            "https://api.github.com/users/nicolasbigot/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/nicolasbigot/received_events",
          type: "User",
          site_admin: false,
          contributions: 2
        },
        {
          login: "pvzig",
          id: 8311605,
          node_id: "MDQ6VXNlcjgzMTE2MDU=",
          avatar_url: "https://avatars2.githubusercontent.com/u/8311605?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/pvzig",
          html_url: "https://github.com/pvzig",
          followers_url: "https://api.github.com/users/pvzig/followers",
          following_url:
            "https://api.github.com/users/pvzig/following{/other_user}",
          gists_url: "https://api.github.com/users/pvzig/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/pvzig/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/pvzig/subscriptions",
          organizations_url: "https://api.github.com/users/pvzig/orgs",
          repos_url: "https://api.github.com/users/pvzig/repos",
          events_url: "https://api.github.com/users/pvzig/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/pvzig/received_events",
          type: "User",
          site_admin: false,
          contributions: 2
        },
        {
          login: "psahgal",
          id: 2686895,
          node_id: "MDQ6VXNlcjI2ODY4OTU=",
          avatar_url: "https://avatars1.githubusercontent.com/u/2686895?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/psahgal",
          html_url: "https://github.com/psahgal",
          followers_url: "https://api.github.com/users/psahgal/followers",
          following_url:
            "https://api.github.com/users/psahgal/following{/other_user}",
          gists_url: "https://api.github.com/users/psahgal/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/psahgal/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/psahgal/subscriptions",
          organizations_url: "https://api.github.com/users/psahgal/orgs",
          repos_url: "https://api.github.com/users/psahgal/repos",
          events_url: "https://api.github.com/users/psahgal/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/psahgal/received_events",
          type: "User",
          site_admin: false,
          contributions: 2
        },
        {
          login: "ricardopereira",
          id: 3541185,
          node_id: "MDQ6VXNlcjM1NDExODU=",
          avatar_url: "https://avatars1.githubusercontent.com/u/3541185?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/ricardopereira",
          html_url: "https://github.com/ricardopereira",
          followers_url:
            "https://api.github.com/users/ricardopereira/followers",
          following_url:
            "https://api.github.com/users/ricardopereira/following{/other_user}",
          gists_url:
            "https://api.github.com/users/ricardopereira/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/ricardopereira/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/ricardopereira/subscriptions",
          organizations_url: "https://api.github.com/users/ricardopereira/orgs",
          repos_url: "https://api.github.com/users/ricardopereira/repos",
          events_url:
            "https://api.github.com/users/ricardopereira/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/ricardopereira/received_events",
          type: "User",
          site_admin: false,
          contributions: 2
        },
        {
          login: "Abeansits",
          id: 165672,
          node_id: "MDQ6VXNlcjE2NTY3Mg==",
          avatar_url: "https://avatars1.githubusercontent.com/u/165672?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Abeansits",
          html_url: "https://github.com/Abeansits",
          followers_url: "https://api.github.com/users/Abeansits/followers",
          following_url:
            "https://api.github.com/users/Abeansits/following{/other_user}",
          gists_url: "https://api.github.com/users/Abeansits/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Abeansits/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Abeansits/subscriptions",
          organizations_url: "https://api.github.com/users/Abeansits/orgs",
          repos_url: "https://api.github.com/users/Abeansits/repos",
          events_url: "https://api.github.com/users/Abeansits/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Abeansits/received_events",
          type: "User",
          site_admin: false,
          contributions: 2
        },
        {
          login: "cnliusen",
          id: 1041742,
          node_id: "MDQ6VXNlcjEwNDE3NDI=",
          avatar_url: "https://avatars1.githubusercontent.com/u/1041742?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/cnliusen",
          html_url: "https://github.com/cnliusen",
          followers_url: "https://api.github.com/users/cnliusen/followers",
          following_url:
            "https://api.github.com/users/cnliusen/following{/other_user}",
          gists_url: "https://api.github.com/users/cnliusen/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/cnliusen/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/cnliusen/subscriptions",
          organizations_url: "https://api.github.com/users/cnliusen/orgs",
          repos_url: "https://api.github.com/users/cnliusen/repos",
          events_url: "https://api.github.com/users/cnliusen/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/cnliusen/received_events",
          type: "User",
          site_admin: false,
          contributions: 2
        },
        {
          login: "TomasLinhart",
          id: 28642,
          node_id: "MDQ6VXNlcjI4NjQy",
          avatar_url: "https://avatars1.githubusercontent.com/u/28642?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/TomasLinhart",
          html_url: "https://github.com/TomasLinhart",
          followers_url: "https://api.github.com/users/TomasLinhart/followers",
          following_url:
            "https://api.github.com/users/TomasLinhart/following{/other_user}",
          gists_url:
            "https://api.github.com/users/TomasLinhart/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/TomasLinhart/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/TomasLinhart/subscriptions",
          organizations_url: "https://api.github.com/users/TomasLinhart/orgs",
          repos_url: "https://api.github.com/users/TomasLinhart/repos",
          events_url:
            "https://api.github.com/users/TomasLinhart/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/TomasLinhart/received_events",
          type: "User",
          site_admin: false,
          contributions: 2
        },
        {
          login: "dependabot[bot]",
          id: 49699333,
          node_id: "MDM6Qm90NDk2OTkzMzM=",
          avatar_url: "https://avatars0.githubusercontent.com/in/29110?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/dependabot%5Bbot%5D",
          html_url: "https://github.com/apps/dependabot",
          followers_url:
            "https://api.github.com/users/dependabot%5Bbot%5D/followers",
          following_url:
            "https://api.github.com/users/dependabot%5Bbot%5D/following{/other_user}",
          gists_url:
            "https://api.github.com/users/dependabot%5Bbot%5D/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/dependabot%5Bbot%5D/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/dependabot%5Bbot%5D/subscriptions",
          organizations_url:
            "https://api.github.com/users/dependabot%5Bbot%5D/orgs",
          repos_url: "https://api.github.com/users/dependabot%5Bbot%5D/repos",
          events_url:
            "https://api.github.com/users/dependabot%5Bbot%5D/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/dependabot%5Bbot%5D/received_events",
          type: "Bot",
          site_admin: false,
          contributions: 2
        },
        {
          login: "rastersize",
          id: 23453,
          node_id: "MDQ6VXNlcjIzNDUz",
          avatar_url: "https://avatars3.githubusercontent.com/u/23453?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/rastersize",
          html_url: "https://github.com/rastersize",
          followers_url: "https://api.github.com/users/rastersize/followers",
          following_url:
            "https://api.github.com/users/rastersize/following{/other_user}",
          gists_url: "https://api.github.com/users/rastersize/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/rastersize/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/rastersize/subscriptions",
          organizations_url: "https://api.github.com/users/rastersize/orgs",
          repos_url: "https://api.github.com/users/rastersize/repos",
          events_url:
            "https://api.github.com/users/rastersize/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/rastersize/received_events",
          type: "User",
          site_admin: false,
          contributions: 2
        },
        {
          login: "fjcaetano",
          id: 1066295,
          node_id: "MDQ6VXNlcjEwNjYyOTU=",
          avatar_url: "https://avatars3.githubusercontent.com/u/1066295?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/fjcaetano",
          html_url: "https://github.com/fjcaetano",
          followers_url: "https://api.github.com/users/fjcaetano/followers",
          following_url:
            "https://api.github.com/users/fjcaetano/following{/other_user}",
          gists_url: "https://api.github.com/users/fjcaetano/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/fjcaetano/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/fjcaetano/subscriptions",
          organizations_url: "https://api.github.com/users/fjcaetano/orgs",
          repos_url: "https://api.github.com/users/fjcaetano/repos",
          events_url: "https://api.github.com/users/fjcaetano/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/fjcaetano/received_events",
          type: "User",
          site_admin: false,
          contributions: 2
        },
        {
          login: "alanzeino",
          id: 470797,
          node_id: "MDQ6VXNlcjQ3MDc5Nw==",
          avatar_url: "https://avatars2.githubusercontent.com/u/470797?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/alanzeino",
          html_url: "https://github.com/alanzeino",
          followers_url: "https://api.github.com/users/alanzeino/followers",
          following_url:
            "https://api.github.com/users/alanzeino/following{/other_user}",
          gists_url: "https://api.github.com/users/alanzeino/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/alanzeino/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/alanzeino/subscriptions",
          organizations_url: "https://api.github.com/users/alanzeino/orgs",
          repos_url: "https://api.github.com/users/alanzeino/repos",
          events_url: "https://api.github.com/users/alanzeino/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/alanzeino/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "AndrewZurn",
          id: 2126119,
          node_id: "MDQ6VXNlcjIxMjYxMTk=",
          avatar_url: "https://avatars1.githubusercontent.com/u/2126119?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/AndrewZurn",
          html_url: "https://github.com/AndrewZurn",
          followers_url: "https://api.github.com/users/AndrewZurn/followers",
          following_url:
            "https://api.github.com/users/AndrewZurn/following{/other_user}",
          gists_url: "https://api.github.com/users/AndrewZurn/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/AndrewZurn/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/AndrewZurn/subscriptions",
          organizations_url: "https://api.github.com/users/AndrewZurn/orgs",
          repos_url: "https://api.github.com/users/AndrewZurn/repos",
          events_url:
            "https://api.github.com/users/AndrewZurn/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/AndrewZurn/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "BlakeBarrett",
          id: 578572,
          node_id: "MDQ6VXNlcjU3ODU3Mg==",
          avatar_url: "https://avatars0.githubusercontent.com/u/578572?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/BlakeBarrett",
          html_url: "https://github.com/BlakeBarrett",
          followers_url: "https://api.github.com/users/BlakeBarrett/followers",
          following_url:
            "https://api.github.com/users/BlakeBarrett/following{/other_user}",
          gists_url:
            "https://api.github.com/users/BlakeBarrett/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/BlakeBarrett/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/BlakeBarrett/subscriptions",
          organizations_url: "https://api.github.com/users/BlakeBarrett/orgs",
          repos_url: "https://api.github.com/users/BlakeBarrett/repos",
          events_url:
            "https://api.github.com/users/BlakeBarrett/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/BlakeBarrett/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "interstateone",
          id: 594059,
          node_id: "MDQ6VXNlcjU5NDA1OQ==",
          avatar_url: "https://avatars0.githubusercontent.com/u/594059?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/interstateone",
          html_url: "https://github.com/interstateone",
          followers_url: "https://api.github.com/users/interstateone/followers",
          following_url:
            "https://api.github.com/users/interstateone/following{/other_user}",
          gists_url:
            "https://api.github.com/users/interstateone/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/interstateone/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/interstateone/subscriptions",
          organizations_url: "https://api.github.com/users/interstateone/orgs",
          repos_url: "https://api.github.com/users/interstateone/repos",
          events_url:
            "https://api.github.com/users/interstateone/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/interstateone/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "brian-dlee",
          id: 15238587,
          node_id: "MDQ6VXNlcjE1MjM4NTg3",
          avatar_url: "https://avatars2.githubusercontent.com/u/15238587?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/brian-dlee",
          html_url: "https://github.com/brian-dlee",
          followers_url: "https://api.github.com/users/brian-dlee/followers",
          following_url:
            "https://api.github.com/users/brian-dlee/following{/other_user}",
          gists_url: "https://api.github.com/users/brian-dlee/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/brian-dlee/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/brian-dlee/subscriptions",
          organizations_url: "https://api.github.com/users/brian-dlee/orgs",
          repos_url: "https://api.github.com/users/brian-dlee/repos",
          events_url:
            "https://api.github.com/users/brian-dlee/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/brian-dlee/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "Jeehut",
          id: 6942160,
          node_id: "MDQ6VXNlcjY5NDIxNjA=",
          avatar_url: "https://avatars2.githubusercontent.com/u/6942160?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Jeehut",
          html_url: "https://github.com/Jeehut",
          followers_url: "https://api.github.com/users/Jeehut/followers",
          following_url:
            "https://api.github.com/users/Jeehut/following{/other_user}",
          gists_url: "https://api.github.com/users/Jeehut/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Jeehut/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Jeehut/subscriptions",
          organizations_url: "https://api.github.com/users/Jeehut/orgs",
          repos_url: "https://api.github.com/users/Jeehut/repos",
          events_url: "https://api.github.com/users/Jeehut/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Jeehut/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "col",
          id: 226558,
          node_id: "MDQ6VXNlcjIyNjU1OA==",
          avatar_url: "https://avatars2.githubusercontent.com/u/226558?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/col",
          html_url: "https://github.com/col",
          followers_url: "https://api.github.com/users/col/followers",
          following_url:
            "https://api.github.com/users/col/following{/other_user}",
          gists_url: "https://api.github.com/users/col/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/col/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/col/subscriptions",
          organizations_url: "https://api.github.com/users/col/orgs",
          repos_url: "https://api.github.com/users/col/repos",
          events_url: "https://api.github.com/users/col/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/col/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "dsato80",
          id: 15008358,
          node_id: "MDQ6VXNlcjE1MDA4MzU4",
          avatar_url: "https://avatars3.githubusercontent.com/u/15008358?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/dsato80",
          html_url: "https://github.com/dsato80",
          followers_url: "https://api.github.com/users/dsato80/followers",
          following_url:
            "https://api.github.com/users/dsato80/following{/other_user}",
          gists_url: "https://api.github.com/users/dsato80/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/dsato80/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/dsato80/subscriptions",
          organizations_url: "https://api.github.com/users/dsato80/orgs",
          repos_url: "https://api.github.com/users/dsato80/repos",
          events_url: "https://api.github.com/users/dsato80/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/dsato80/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "Danappelxx",
          id: 3291251,
          node_id: "MDQ6VXNlcjMyOTEyNTE=",
          avatar_url: "https://avatars0.githubusercontent.com/u/3291251?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Danappelxx",
          html_url: "https://github.com/Danappelxx",
          followers_url: "https://api.github.com/users/Danappelxx/followers",
          following_url:
            "https://api.github.com/users/Danappelxx/following{/other_user}",
          gists_url: "https://api.github.com/users/Danappelxx/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Danappelxx/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Danappelxx/subscriptions",
          organizations_url: "https://api.github.com/users/Danappelxx/orgs",
          repos_url: "https://api.github.com/users/Danappelxx/repos",
          events_url:
            "https://api.github.com/users/Danappelxx/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Danappelxx/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "danielrhammond",
          id: 3551,
          node_id: "MDQ6VXNlcjM1NTE=",
          avatar_url: "https://avatars2.githubusercontent.com/u/3551?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/danielrhammond",
          html_url: "https://github.com/danielrhammond",
          followers_url:
            "https://api.github.com/users/danielrhammond/followers",
          following_url:
            "https://api.github.com/users/danielrhammond/following{/other_user}",
          gists_url:
            "https://api.github.com/users/danielrhammond/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/danielrhammond/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/danielrhammond/subscriptions",
          organizations_url: "https://api.github.com/users/danielrhammond/orgs",
          repos_url: "https://api.github.com/users/danielrhammond/repos",
          events_url:
            "https://api.github.com/users/danielrhammond/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/danielrhammond/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "fb55",
          id: 188768,
          node_id: "MDQ6VXNlcjE4ODc2OA==",
          avatar_url: "https://avatars2.githubusercontent.com/u/188768?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/fb55",
          html_url: "https://github.com/fb55",
          followers_url: "https://api.github.com/users/fb55/followers",
          following_url:
            "https://api.github.com/users/fb55/following{/other_user}",
          gists_url: "https://api.github.com/users/fb55/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/fb55/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/fb55/subscriptions",
          organizations_url: "https://api.github.com/users/fb55/orgs",
          repos_url: "https://api.github.com/users/fb55/repos",
          events_url: "https://api.github.com/users/fb55/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/fb55/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "frederik-jacques",
          id: 1405568,
          node_id: "MDQ6VXNlcjE0MDU1Njg=",
          avatar_url: "https://avatars2.githubusercontent.com/u/1405568?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/frederik-jacques",
          html_url: "https://github.com/frederik-jacques",
          followers_url:
            "https://api.github.com/users/frederik-jacques/followers",
          following_url:
            "https://api.github.com/users/frederik-jacques/following{/other_user}",
          gists_url:
            "https://api.github.com/users/frederik-jacques/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/frederik-jacques/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/frederik-jacques/subscriptions",
          organizations_url:
            "https://api.github.com/users/frederik-jacques/orgs",
          repos_url: "https://api.github.com/users/frederik-jacques/repos",
          events_url:
            "https://api.github.com/users/frederik-jacques/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/frederik-jacques/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "hamchapman",
          id: 2475150,
          node_id: "MDQ6VXNlcjI0NzUxNTA=",
          avatar_url: "https://avatars2.githubusercontent.com/u/2475150?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/hamchapman",
          html_url: "https://github.com/hamchapman",
          followers_url: "https://api.github.com/users/hamchapman/followers",
          following_url:
            "https://api.github.com/users/hamchapman/following{/other_user}",
          gists_url: "https://api.github.com/users/hamchapman/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/hamchapman/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/hamchapman/subscriptions",
          organizations_url: "https://api.github.com/users/hamchapman/orgs",
          repos_url: "https://api.github.com/users/hamchapman/repos",
          events_url:
            "https://api.github.com/users/hamchapman/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/hamchapman/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "wittedhaddock",
          id: 1206813,
          node_id: "MDQ6VXNlcjEyMDY4MTM=",
          avatar_url: "https://avatars3.githubusercontent.com/u/1206813?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wittedhaddock",
          html_url: "https://github.com/wittedhaddock",
          followers_url: "https://api.github.com/users/wittedhaddock/followers",
          following_url:
            "https://api.github.com/users/wittedhaddock/following{/other_user}",
          gists_url:
            "https://api.github.com/users/wittedhaddock/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wittedhaddock/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/wittedhaddock/subscriptions",
          organizations_url: "https://api.github.com/users/wittedhaddock/orgs",
          repos_url: "https://api.github.com/users/wittedhaddock/repos",
          events_url:
            "https://api.github.com/users/wittedhaddock/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wittedhaddock/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "JamesPrudente",
          id: 13003,
          node_id: "MDQ6VXNlcjEzMDAz",
          avatar_url: "https://avatars2.githubusercontent.com/u/13003?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/JamesPrudente",
          html_url: "https://github.com/JamesPrudente",
          followers_url: "https://api.github.com/users/JamesPrudente/followers",
          following_url:
            "https://api.github.com/users/JamesPrudente/following{/other_user}",
          gists_url:
            "https://api.github.com/users/JamesPrudente/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/JamesPrudente/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/JamesPrudente/subscriptions",
          organizations_url: "https://api.github.com/users/JamesPrudente/orgs",
          repos_url: "https://api.github.com/users/JamesPrudente/repos",
          events_url:
            "https://api.github.com/users/JamesPrudente/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/JamesPrudente/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "yamoridon",
          id: 1283989,
          node_id: "MDQ6VXNlcjEyODM5ODk=",
          avatar_url: "https://avatars2.githubusercontent.com/u/1283989?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/yamoridon",
          html_url: "https://github.com/yamoridon",
          followers_url: "https://api.github.com/users/yamoridon/followers",
          following_url:
            "https://api.github.com/users/yamoridon/following{/other_user}",
          gists_url: "https://api.github.com/users/yamoridon/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/yamoridon/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/yamoridon/subscriptions",
          organizations_url: "https://api.github.com/users/yamoridon/orgs",
          repos_url: "https://api.github.com/users/yamoridon/repos",
          events_url: "https://api.github.com/users/yamoridon/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/yamoridon/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "kylebshr",
          id: 3526783,
          node_id: "MDQ6VXNlcjM1MjY3ODM=",
          avatar_url: "https://avatars0.githubusercontent.com/u/3526783?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/kylebshr",
          html_url: "https://github.com/kylebshr",
          followers_url: "https://api.github.com/users/kylebshr/followers",
          following_url:
            "https://api.github.com/users/kylebshr/following{/other_user}",
          gists_url: "https://api.github.com/users/kylebshr/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/kylebshr/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/kylebshr/subscriptions",
          organizations_url: "https://api.github.com/users/kylebshr/orgs",
          repos_url: "https://api.github.com/users/kylebshr/repos",
          events_url: "https://api.github.com/users/kylebshr/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/kylebshr/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "sirlantis",
          id: 56807,
          node_id: "MDQ6VXNlcjU2ODA3",
          avatar_url: "https://avatars1.githubusercontent.com/u/56807?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/sirlantis",
          html_url: "https://github.com/sirlantis",
          followers_url: "https://api.github.com/users/sirlantis/followers",
          following_url:
            "https://api.github.com/users/sirlantis/following{/other_user}",
          gists_url: "https://api.github.com/users/sirlantis/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/sirlantis/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/sirlantis/subscriptions",
          organizations_url: "https://api.github.com/users/sirlantis/orgs",
          repos_url: "https://api.github.com/users/sirlantis/repos",
          events_url: "https://api.github.com/users/sirlantis/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/sirlantis/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "markus-k",
          id: 1889403,
          node_id: "MDQ6VXNlcjE4ODk0MDM=",
          avatar_url: "https://avatars3.githubusercontent.com/u/1889403?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/markus-k",
          html_url: "https://github.com/markus-k",
          followers_url: "https://api.github.com/users/markus-k/followers",
          following_url:
            "https://api.github.com/users/markus-k/following{/other_user}",
          gists_url: "https://api.github.com/users/markus-k/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/markus-k/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/markus-k/subscriptions",
          organizations_url: "https://api.github.com/users/markus-k/orgs",
          repos_url: "https://api.github.com/users/markus-k/repos",
          events_url: "https://api.github.com/users/markus-k/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/markus-k/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "mstorsjo",
          id: 69727,
          node_id: "MDQ6VXNlcjY5NzI3",
          avatar_url: "https://avatars2.githubusercontent.com/u/69727?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/mstorsjo",
          html_url: "https://github.com/mstorsjo",
          followers_url: "https://api.github.com/users/mstorsjo/followers",
          following_url:
            "https://api.github.com/users/mstorsjo/following{/other_user}",
          gists_url: "https://api.github.com/users/mstorsjo/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/mstorsjo/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/mstorsjo/subscriptions",
          organizations_url: "https://api.github.com/users/mstorsjo/orgs",
          repos_url: "https://api.github.com/users/mstorsjo/repos",
          events_url: "https://api.github.com/users/mstorsjo/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/mstorsjo/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "nathanborror",
          id: 37658,
          node_id: "MDQ6VXNlcjM3NjU4",
          avatar_url: "https://avatars2.githubusercontent.com/u/37658?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/nathanborror",
          html_url: "https://github.com/nathanborror",
          followers_url: "https://api.github.com/users/nathanborror/followers",
          following_url:
            "https://api.github.com/users/nathanborror/following{/other_user}",
          gists_url:
            "https://api.github.com/users/nathanborror/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/nathanborror/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/nathanborror/subscriptions",
          organizations_url: "https://api.github.com/users/nathanborror/orgs",
          repos_url: "https://api.github.com/users/nathanborror/repos",
          events_url:
            "https://api.github.com/users/nathanborror/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/nathanborror/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "nremond",
          id: 600102,
          node_id: "MDQ6VXNlcjYwMDEwMg==",
          avatar_url: "https://avatars0.githubusercontent.com/u/600102?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/nremond",
          html_url: "https://github.com/nremond",
          followers_url: "https://api.github.com/users/nremond/followers",
          following_url:
            "https://api.github.com/users/nremond/following{/other_user}",
          gists_url: "https://api.github.com/users/nremond/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/nremond/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/nremond/subscriptions",
          organizations_url: "https://api.github.com/users/nremond/orgs",
          repos_url: "https://api.github.com/users/nremond/repos",
          events_url: "https://api.github.com/users/nremond/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/nremond/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "olivierboucher",
          id: 6015183,
          node_id: "MDQ6VXNlcjYwMTUxODM=",
          avatar_url: "https://avatars2.githubusercontent.com/u/6015183?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/olivierboucher",
          html_url: "https://github.com/olivierboucher",
          followers_url:
            "https://api.github.com/users/olivierboucher/followers",
          following_url:
            "https://api.github.com/users/olivierboucher/following{/other_user}",
          gists_url:
            "https://api.github.com/users/olivierboucher/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/olivierboucher/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/olivierboucher/subscriptions",
          organizations_url: "https://api.github.com/users/olivierboucher/orgs",
          repos_url: "https://api.github.com/users/olivierboucher/repos",
          events_url:
            "https://api.github.com/users/olivierboucher/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/olivierboucher/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "patmalt",
          id: 684677,
          node_id: "MDQ6VXNlcjY4NDY3Nw==",
          avatar_url: "https://avatars0.githubusercontent.com/u/684677?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/patmalt",
          html_url: "https://github.com/patmalt",
          followers_url: "https://api.github.com/users/patmalt/followers",
          following_url:
            "https://api.github.com/users/patmalt/following{/other_user}",
          gists_url: "https://api.github.com/users/patmalt/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/patmalt/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/patmalt/subscriptions",
          organizations_url: "https://api.github.com/users/patmalt/orgs",
          repos_url: "https://api.github.com/users/patmalt/repos",
          events_url: "https://api.github.com/users/patmalt/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/patmalt/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "pducks32",
          id: 6308109,
          node_id: "MDQ6VXNlcjYzMDgxMDk=",
          avatar_url: "https://avatars3.githubusercontent.com/u/6308109?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/pducks32",
          html_url: "https://github.com/pducks32",
          followers_url: "https://api.github.com/users/pducks32/followers",
          following_url:
            "https://api.github.com/users/pducks32/following{/other_user}",
          gists_url: "https://api.github.com/users/pducks32/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/pducks32/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/pducks32/subscriptions",
          organizations_url: "https://api.github.com/users/pducks32/orgs",
          repos_url: "https://api.github.com/users/pducks32/repos",
          events_url: "https://api.github.com/users/pducks32/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/pducks32/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "ReadmeCritic",
          id: 15367484,
          node_id: "MDQ6VXNlcjE1MzY3NDg0",
          avatar_url: "https://avatars3.githubusercontent.com/u/15367484?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/ReadmeCritic",
          html_url: "https://github.com/ReadmeCritic",
          followers_url: "https://api.github.com/users/ReadmeCritic/followers",
          following_url:
            "https://api.github.com/users/ReadmeCritic/following{/other_user}",
          gists_url:
            "https://api.github.com/users/ReadmeCritic/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/ReadmeCritic/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/ReadmeCritic/subscriptions",
          organizations_url: "https://api.github.com/users/ReadmeCritic/orgs",
          repos_url: "https://api.github.com/users/ReadmeCritic/repos",
          events_url:
            "https://api.github.com/users/ReadmeCritic/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/ReadmeCritic/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "robinkunde",
          id: 3142400,
          node_id: "MDQ6VXNlcjMxNDI0MDA=",
          avatar_url: "https://avatars2.githubusercontent.com/u/3142400?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/robinkunde",
          html_url: "https://github.com/robinkunde",
          followers_url: "https://api.github.com/users/robinkunde/followers",
          following_url:
            "https://api.github.com/users/robinkunde/following{/other_user}",
          gists_url: "https://api.github.com/users/robinkunde/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/robinkunde/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/robinkunde/subscriptions",
          organizations_url: "https://api.github.com/users/robinkunde/orgs",
          repos_url: "https://api.github.com/users/robinkunde/repos",
          events_url:
            "https://api.github.com/users/robinkunde/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/robinkunde/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "insanehunter",
          id: 393024,
          node_id: "MDQ6VXNlcjM5MzAyNA==",
          avatar_url: "https://avatars3.githubusercontent.com/u/393024?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/insanehunter",
          html_url: "https://github.com/insanehunter",
          followers_url: "https://api.github.com/users/insanehunter/followers",
          following_url:
            "https://api.github.com/users/insanehunter/following{/other_user}",
          gists_url:
            "https://api.github.com/users/insanehunter/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/insanehunter/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/insanehunter/subscriptions",
          organizations_url: "https://api.github.com/users/insanehunter/orgs",
          repos_url: "https://api.github.com/users/insanehunter/repos",
          events_url:
            "https://api.github.com/users/insanehunter/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/insanehunter/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "neoneye",
          id: 147971,
          node_id: "MDQ6VXNlcjE0Nzk3MQ==",
          avatar_url: "https://avatars3.githubusercontent.com/u/147971?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/neoneye",
          html_url: "https://github.com/neoneye",
          followers_url: "https://api.github.com/users/neoneye/followers",
          following_url:
            "https://api.github.com/users/neoneye/following{/other_user}",
          gists_url: "https://api.github.com/users/neoneye/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/neoneye/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/neoneye/subscriptions",
          organizations_url: "https://api.github.com/users/neoneye/orgs",
          repos_url: "https://api.github.com/users/neoneye/repos",
          events_url: "https://api.github.com/users/neoneye/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/neoneye/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "simonbs",
          id: 830995,
          node_id: "MDQ6VXNlcjgzMDk5NQ==",
          avatar_url: "https://avatars1.githubusercontent.com/u/830995?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/simonbs",
          html_url: "https://github.com/simonbs",
          followers_url: "https://api.github.com/users/simonbs/followers",
          following_url:
            "https://api.github.com/users/simonbs/following{/other_user}",
          gists_url: "https://api.github.com/users/simonbs/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/simonbs/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/simonbs/subscriptions",
          organizations_url: "https://api.github.com/users/simonbs/orgs",
          repos_url: "https://api.github.com/users/simonbs/repos",
          events_url: "https://api.github.com/users/simonbs/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/simonbs/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "ThinkChaos",
          id: 4761135,
          node_id: "MDQ6VXNlcjQ3NjExMzU=",
          avatar_url: "https://avatars2.githubusercontent.com/u/4761135?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/ThinkChaos",
          html_url: "https://github.com/ThinkChaos",
          followers_url: "https://api.github.com/users/ThinkChaos/followers",
          following_url:
            "https://api.github.com/users/ThinkChaos/following{/other_user}",
          gists_url: "https://api.github.com/users/ThinkChaos/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/ThinkChaos/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/ThinkChaos/subscriptions",
          organizations_url: "https://api.github.com/users/ThinkChaos/orgs",
          repos_url: "https://api.github.com/users/ThinkChaos/repos",
          events_url:
            "https://api.github.com/users/ThinkChaos/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/ThinkChaos/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "treyrich",
          id: 1641028,
          node_id: "MDQ6VXNlcjE2NDEwMjg=",
          avatar_url: "https://avatars0.githubusercontent.com/u/1641028?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/treyrich",
          html_url: "https://github.com/treyrich",
          followers_url: "https://api.github.com/users/treyrich/followers",
          following_url:
            "https://api.github.com/users/treyrich/following{/other_user}",
          gists_url: "https://api.github.com/users/treyrich/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/treyrich/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/treyrich/subscriptions",
          organizations_url: "https://api.github.com/users/treyrich/orgs",
          repos_url: "https://api.github.com/users/treyrich/repos",
          events_url: "https://api.github.com/users/treyrich/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/treyrich/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "vonox7",
          id: 621501,
          node_id: "MDQ6VXNlcjYyMTUwMQ==",
          avatar_url: "https://avatars3.githubusercontent.com/u/621501?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/vonox7",
          html_url: "https://github.com/vonox7",
          followers_url: "https://api.github.com/users/vonox7/followers",
          following_url:
            "https://api.github.com/users/vonox7/following{/other_user}",
          gists_url: "https://api.github.com/users/vonox7/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/vonox7/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/vonox7/subscriptions",
          organizations_url: "https://api.github.com/users/vonox7/orgs",
          repos_url: "https://api.github.com/users/vonox7/repos",
          events_url: "https://api.github.com/users/vonox7/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/vonox7/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "victorg1991",
          id: 11654230,
          node_id: "MDQ6VXNlcjExNjU0MjMw",
          avatar_url: "https://avatars2.githubusercontent.com/u/11654230?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/victorg1991",
          html_url: "https://github.com/victorg1991",
          followers_url: "https://api.github.com/users/victorg1991/followers",
          following_url:
            "https://api.github.com/users/victorg1991/following{/other_user}",
          gists_url: "https://api.github.com/users/victorg1991/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/victorg1991/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/victorg1991/subscriptions",
          organizations_url: "https://api.github.com/users/victorg1991/orgs",
          repos_url: "https://api.github.com/users/victorg1991/repos",
          events_url:
            "https://api.github.com/users/victorg1991/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/victorg1991/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "victorluft",
          id: 57715,
          node_id: "MDQ6VXNlcjU3NzE1",
          avatar_url: "https://avatars3.githubusercontent.com/u/57715?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/victorluft",
          html_url: "https://github.com/victorluft",
          followers_url: "https://api.github.com/users/victorluft/followers",
          following_url:
            "https://api.github.com/users/victorluft/following{/other_user}",
          gists_url: "https://api.github.com/users/victorluft/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/victorluft/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/victorluft/subscriptions",
          organizations_url: "https://api.github.com/users/victorluft/orgs",
          repos_url: "https://api.github.com/users/victorluft/repos",
          events_url:
            "https://api.github.com/users/victorluft/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/victorluft/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "yannickl",
          id: 798235,
          node_id: "MDQ6VXNlcjc5ODIzNQ==",
          avatar_url: "https://avatars3.githubusercontent.com/u/798235?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/yannickl",
          html_url: "https://github.com/yannickl",
          followers_url: "https://api.github.com/users/yannickl/followers",
          following_url:
            "https://api.github.com/users/yannickl/following{/other_user}",
          gists_url: "https://api.github.com/users/yannickl/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/yannickl/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/yannickl/subscriptions",
          organizations_url: "https://api.github.com/users/yannickl/orgs",
          repos_url: "https://api.github.com/users/yannickl/repos",
          events_url: "https://api.github.com/users/yannickl/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/yannickl/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "jcesarmobile",
          id: 1637892,
          node_id: "MDQ6VXNlcjE2Mzc4OTI=",
          avatar_url: "https://avatars3.githubusercontent.com/u/1637892?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jcesarmobile",
          html_url: "https://github.com/jcesarmobile",
          followers_url: "https://api.github.com/users/jcesarmobile/followers",
          following_url:
            "https://api.github.com/users/jcesarmobile/following{/other_user}",
          gists_url:
            "https://api.github.com/users/jcesarmobile/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jcesarmobile/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jcesarmobile/subscriptions",
          organizations_url: "https://api.github.com/users/jcesarmobile/orgs",
          repos_url: "https://api.github.com/users/jcesarmobile/repos",
          events_url:
            "https://api.github.com/users/jcesarmobile/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jcesarmobile/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "onevcat",
          id: 1019875,
          node_id: "MDQ6VXNlcjEwMTk4NzU=",
          avatar_url: "https://avatars0.githubusercontent.com/u/1019875?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/onevcat",
          html_url: "https://github.com/onevcat",
          followers_url: "https://api.github.com/users/onevcat/followers",
          following_url:
            "https://api.github.com/users/onevcat/following{/other_user}",
          gists_url: "https://api.github.com/users/onevcat/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/onevcat/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/onevcat/subscriptions",
          organizations_url: "https://api.github.com/users/onevcat/orgs",
          repos_url: "https://api.github.com/users/onevcat/repos",
          events_url: "https://api.github.com/users/onevcat/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/onevcat/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "qiuncheng",
          id: 9990834,
          node_id: "MDQ6VXNlcjk5OTA4MzQ=",
          avatar_url: "https://avatars2.githubusercontent.com/u/9990834?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/qiuncheng",
          html_url: "https://github.com/qiuncheng",
          followers_url: "https://api.github.com/users/qiuncheng/followers",
          following_url:
            "https://api.github.com/users/qiuncheng/following{/other_user}",
          gists_url: "https://api.github.com/users/qiuncheng/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/qiuncheng/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/qiuncheng/subscriptions",
          organizations_url: "https://api.github.com/users/qiuncheng/orgs",
          repos_url: "https://api.github.com/users/qiuncheng/repos",
          events_url: "https://api.github.com/users/qiuncheng/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/qiuncheng/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "slk333",
          id: 23578949,
          node_id: "MDQ6VXNlcjIzNTc4OTQ5",
          avatar_url: "https://avatars2.githubusercontent.com/u/23578949?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/slk333",
          html_url: "https://github.com/slk333",
          followers_url: "https://api.github.com/users/slk333/followers",
          following_url:
            "https://api.github.com/users/slk333/following{/other_user}",
          gists_url: "https://api.github.com/users/slk333/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/slk333/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/slk333/subscriptions",
          organizations_url: "https://api.github.com/users/slk333/orgs",
          repos_url: "https://api.github.com/users/slk333/repos",
          events_url: "https://api.github.com/users/slk333/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/slk333/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        },
        {
          login: "xjbeta",
          id: 11794321,
          node_id: "MDQ6VXNlcjExNzk0MzIx",
          avatar_url: "https://avatars1.githubusercontent.com/u/11794321?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/xjbeta",
          html_url: "https://github.com/xjbeta",
          followers_url: "https://api.github.com/users/xjbeta/followers",
          following_url:
            "https://api.github.com/users/xjbeta/following{/other_user}",
          gists_url: "https://api.github.com/users/xjbeta/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/xjbeta/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/xjbeta/subscriptions",
          organizations_url: "https://api.github.com/users/xjbeta/orgs",
          repos_url: "https://api.github.com/users/xjbeta/repos",
          events_url: "https://api.github.com/users/xjbeta/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/xjbeta/received_events",
          type: "User",
          site_admin: false,
          contributions: 1
        }
      ],
      deployments:[
{
"url": "https://api.github.com/repos/facebook/react/deployments/53214472",
"id": 53214472,
"node_id": "MDEwOkRlcGxveW1lbnQ1MzIxNDQ3Mg==",
"sha": "d027eca037f06f682f667597bd68a0cd638e4f2e",
"ref": "d027eca037f06f682f667597bd68a0cd638e4f2e",
"task": "deploy",
"payload": {},
"original_environment": "github-pages",
"environment": "github-pages",
"description": null,
"creator": {
"login": "bvaughn",
"id": 29597,
"node_id": "MDQ6VXNlcjI5NTk3",
"avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/bvaughn",
"html_url": "https://github.com/bvaughn",
"followers_url": "https://api.github.com/users/bvaughn/followers",
"following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
"gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
"starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
"organizations_url": "https://api.github.com/users/bvaughn/orgs",
"repos_url": "https://api.github.com/users/bvaughn/repos",
"events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
"received_events_url": "https://api.github.com/users/bvaughn/received_events",
"type": "User",
"site_admin": false
},
"created_at": "2017-09-29T15:37:26Z",
"updated_at": "2017-09-29T15:37:26Z",
"statuses_url": "https://api.github.com/repos/facebook/react/deployments/53214472/statuses",
"repository_url": "https://api.github.com/repos/facebook/react"
},
{
"url": "https://api.github.com/repos/facebook/react/deployments/53214412",
"id": 53214412,
"node_id": "MDEwOkRlcGxveW1lbnQ1MzIxNDQxMg==",
"sha": "c96fbd43c40f1c0fb72ade7001613a4bdf652e42",
"ref": "c96fbd43c40f1c0fb72ade7001613a4bdf652e42",
"task": "deploy",
"payload": {},
"original_environment": "github-pages",
"environment": "github-pages",
"description": null,
"creator": {
"login": "bvaughn",
"id": 29597,
"node_id": "MDQ6VXNlcjI5NTk3",
"avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/bvaughn",
"html_url": "https://github.com/bvaughn",
"followers_url": "https://api.github.com/users/bvaughn/followers",
"following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
"gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
"starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
"organizations_url": "https://api.github.com/users/bvaughn/orgs",
"repos_url": "https://api.github.com/users/bvaughn/repos",
"events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
"received_events_url": "https://api.github.com/users/bvaughn/received_events",
"type": "User",
"site_admin": false
},
"created_at": "2017-09-29T15:37:03Z",
"updated_at": "2017-09-29T15:37:03Z",
"statuses_url": "https://api.github.com/repos/facebook/react/deployments/53214412/statuses",
"repository_url": "https://api.github.com/repos/facebook/react"
},
{
"url": "https://api.github.com/repos/facebook/react/deployments/53213951",
"id": 53213951,
"node_id": "MDEwOkRlcGxveW1lbnQ1MzIxMzk1MQ==",
"sha": "2f696fb2893c52caf259cd1368c04043132affc7",
"ref": "2f696fb2893c52caf259cd1368c04043132affc7",
"task": "deploy",
"payload": {},
"original_environment": "github-pages",
"environment": "github-pages",
"description": null,
"creator": {
"login": "bvaughn",
"id": 29597,
"node_id": "MDQ6VXNlcjI5NTk3",
"avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/bvaughn",
"html_url": "https://github.com/bvaughn",
"followers_url": "https://api.github.com/users/bvaughn/followers",
"following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
"gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
"starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
"organizations_url": "https://api.github.com/users/bvaughn/orgs",
"repos_url": "https://api.github.com/users/bvaughn/repos",
"events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
"received_events_url": "https://api.github.com/users/bvaughn/received_events",
"type": "User",
"site_admin": false
},
"created_at": "2017-09-29T15:33:17Z",
"updated_at": "2017-09-29T15:33:17Z",
"statuses_url": "https://api.github.com/repos/facebook/react/deployments/53213951/statuses",
"repository_url": "https://api.github.com/repos/facebook/react"
},
{
"url": "https://api.github.com/repos/facebook/react/deployments/53213124",
"id": 53213124,
"node_id": "MDEwOkRlcGxveW1lbnQ1MzIxMzEyNA==",
"sha": "887ccf2534ab010bc645984ccff390a3e9f2c671",
"ref": "887ccf2534ab010bc645984ccff390a3e9f2c671",
"task": "deploy",
"payload": {},
"original_environment": "github-pages",
"environment": "github-pages",
"description": null,
"creator": {
"login": "bvaughn",
"id": 29597,
"node_id": "MDQ6VXNlcjI5NTk3",
"avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/bvaughn",
"html_url": "https://github.com/bvaughn",
"followers_url": "https://api.github.com/users/bvaughn/followers",
"following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
"gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
"starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
"organizations_url": "https://api.github.com/users/bvaughn/orgs",
"repos_url": "https://api.github.com/users/bvaughn/repos",
"events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
"received_events_url": "https://api.github.com/users/bvaughn/received_events",
"type": "User",
"site_admin": false
},
"created_at": "2017-09-29T15:27:18Z",
"updated_at": "2017-09-29T15:27:18Z",
"statuses_url": "https://api.github.com/repos/facebook/react/deployments/53213124/statuses",
"repository_url": "https://api.github.com/repos/facebook/react"
},
{
"url": "https://api.github.com/repos/facebook/react/deployments/52957960",
"id": 52957960,
"node_id": "MDEwOkRlcGxveW1lbnQ1Mjk1Nzk2MA==",
"sha": "a34c28aaf9380041d72cc35a60c063a5764addfe",
"ref": "a34c28aaf9380041d72cc35a60c063a5764addfe",
"task": "deploy",
"payload": {},
"original_environment": "github-pages",
"environment": "github-pages",
"description": null,
"creator": {
"login": "reactjs-bot",
"id": 11689122,
"node_id": "MDQ6VXNlcjExNjg5MTIy",
"avatar_url": "https://avatars0.githubusercontent.com/u/11689122?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/reactjs-bot",
"html_url": "https://github.com/reactjs-bot",
"followers_url": "https://api.github.com/users/reactjs-bot/followers",
"following_url": "https://api.github.com/users/reactjs-bot/following{/other_user}",
"gists_url": "https://api.github.com/users/reactjs-bot/gists{/gist_id}",
"starred_url": "https://api.github.com/users/reactjs-bot/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/reactjs-bot/subscriptions",
"organizations_url": "https://api.github.com/users/reactjs-bot/orgs",
"repos_url": "https://api.github.com/users/reactjs-bot/repos",
"events_url": "https://api.github.com/users/reactjs-bot/events{/privacy}",
"received_events_url": "https://api.github.com/users/reactjs-bot/received_events",
"type": "User",
"site_admin": false
},
"created_at": "2017-09-27T18:45:11Z",
"updated_at": "2017-09-27T18:45:11Z",
"statuses_url": "https://api.github.com/repos/facebook/react/deployments/52957960/statuses",
"repository_url": "https://api.github.com/repos/facebook/react"
},
{
"url": "https://api.github.com/repos/facebook/react/deployments/52941334",
"id": 52941334,
"node_id": "MDEwOkRlcGxveW1lbnQ1Mjk0MTMzNA==",
"sha": "f428b39aa180aa60e3aaeab742e9298f922cbe60",
"ref": "f428b39aa180aa60e3aaeab742e9298f922cbe60",
"task": "deploy",
"payload": {},
"original_environment": "github-pages",
"environment": "github-pages",
"description": null,
"creator": {
"login": "reactjs-bot",
"id": 11689122,
"node_id": "MDQ6VXNlcjExNjg5MTIy",
"avatar_url": "https://avatars0.githubusercontent.com/u/11689122?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/reactjs-bot",
"html_url": "https://github.com/reactjs-bot",
"followers_url": "https://api.github.com/users/reactjs-bot/followers",
"following_url": "https://api.github.com/users/reactjs-bot/following{/other_user}",
"gists_url": "https://api.github.com/users/reactjs-bot/gists{/gist_id}",
"starred_url": "https://api.github.com/users/reactjs-bot/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/reactjs-bot/subscriptions",
"organizations_url": "https://api.github.com/users/reactjs-bot/orgs",
"repos_url": "https://api.github.com/users/reactjs-bot/repos",
"events_url": "https://api.github.com/users/reactjs-bot/events{/privacy}",
"received_events_url": "https://api.github.com/users/reactjs-bot/received_events",
"type": "User",
"site_admin": false
},
"created_at": "2017-09-27T16:24:30Z",
"updated_at": "2017-09-27T16:24:30Z",
"statuses_url": "https://api.github.com/repos/facebook/react/deployments/52941334/statuses",
"repository_url": "https://api.github.com/repos/facebook/react"
},
{
"url": "https://api.github.com/repos/facebook/react/deployments/52940044",
"id": 52940044,
"node_id": "MDEwOkRlcGxveW1lbnQ1Mjk0MDA0NA==",
"sha": "32b364620279ce6afdd02b64167501f9817f1fe4",
"ref": "32b364620279ce6afdd02b64167501f9817f1fe4",
"task": "deploy",
"payload": {},
"original_environment": "github-pages",
"environment": "github-pages",
"description": null,
"creator": {
"login": "reactjs-bot",
"id": 11689122,
"node_id": "MDQ6VXNlcjExNjg5MTIy",
"avatar_url": "https://avatars0.githubusercontent.com/u/11689122?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/reactjs-bot",
"html_url": "https://github.com/reactjs-bot",
"followers_url": "https://api.github.com/users/reactjs-bot/followers",
"following_url": "https://api.github.com/users/reactjs-bot/following{/other_user}",
"gists_url": "https://api.github.com/users/reactjs-bot/gists{/gist_id}",
"starred_url": "https://api.github.com/users/reactjs-bot/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/reactjs-bot/subscriptions",
"organizations_url": "https://api.github.com/users/reactjs-bot/orgs",
"repos_url": "https://api.github.com/users/reactjs-bot/repos",
"events_url": "https://api.github.com/users/reactjs-bot/events{/privacy}",
"received_events_url": "https://api.github.com/users/reactjs-bot/received_events",
"type": "User",
"site_admin": false
},
"created_at": "2017-09-27T16:14:53Z",
"updated_at": "2017-09-27T16:14:53Z",
"statuses_url": "https://api.github.com/repos/facebook/react/deployments/52940044/statuses",
"repository_url": "https://api.github.com/repos/facebook/react"
},
{
"url": "https://api.github.com/repos/facebook/react/deployments/52911460",
"id": 52911460,
"node_id": "MDEwOkRlcGxveW1lbnQ1MjkxMTQ2MA==",
"sha": "cee6c8d54ba464be9bedbcd9b266e6a2531b1be2",
"ref": "cee6c8d54ba464be9bedbcd9b266e6a2531b1be2",
"task": "deploy",
"payload": {},
"original_environment": "github-pages",
"environment": "github-pages",
"description": null,
"creator": {
"login": "reactjs-bot",
"id": 11689122,
"node_id": "MDQ6VXNlcjExNjg5MTIy",
"avatar_url": "https://avatars0.githubusercontent.com/u/11689122?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/reactjs-bot",
"html_url": "https://github.com/reactjs-bot",
"followers_url": "https://api.github.com/users/reactjs-bot/followers",
"following_url": "https://api.github.com/users/reactjs-bot/following{/other_user}",
"gists_url": "https://api.github.com/users/reactjs-bot/gists{/gist_id}",
"starred_url": "https://api.github.com/users/reactjs-bot/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/reactjs-bot/subscriptions",
"organizations_url": "https://api.github.com/users/reactjs-bot/orgs",
"repos_url": "https://api.github.com/users/reactjs-bot/repos",
"events_url": "https://api.github.com/users/reactjs-bot/events{/privacy}",
"received_events_url": "https://api.github.com/users/reactjs-bot/received_events",
"type": "User",
"site_admin": false
},
"created_at": "2017-09-27T12:40:15Z",
"updated_at": "2017-09-27T12:40:15Z",
"statuses_url": "https://api.github.com/repos/facebook/react/deployments/52911460/statuses",
"repository_url": "https://api.github.com/repos/facebook/react"
},
{
"url": "https://api.github.com/repos/facebook/react/deployments/52898627",
"id": 52898627,
"node_id": "MDEwOkRlcGxveW1lbnQ1Mjg5ODYyNw==",
"sha": "a359efcd68b017a37a84b0682bb2abbb3994e360",
"ref": "a359efcd68b017a37a84b0682bb2abbb3994e360",
"task": "deploy",
"payload": {},
"original_environment": "github-pages",
"environment": "github-pages",
"description": null,
"creator": {
"login": "reactjs-bot",
"id": 11689122,
"node_id": "MDQ6VXNlcjExNjg5MTIy",
"avatar_url": "https://avatars0.githubusercontent.com/u/11689122?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/reactjs-bot",
"html_url": "https://github.com/reactjs-bot",
"followers_url": "https://api.github.com/users/reactjs-bot/followers",
"following_url": "https://api.github.com/users/reactjs-bot/following{/other_user}",
"gists_url": "https://api.github.com/users/reactjs-bot/gists{/gist_id}",
"starred_url": "https://api.github.com/users/reactjs-bot/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/reactjs-bot/subscriptions",
"organizations_url": "https://api.github.com/users/reactjs-bot/orgs",
"repos_url": "https://api.github.com/users/reactjs-bot/repos",
"events_url": "https://api.github.com/users/reactjs-bot/events{/privacy}",
"received_events_url": "https://api.github.com/users/reactjs-bot/received_events",
"type": "User",
"site_admin": false
},
"created_at": "2017-09-27T10:27:58Z",
"updated_at": "2017-09-27T10:27:58Z",
"statuses_url": "https://api.github.com/repos/facebook/react/deployments/52898627/statuses",
"repository_url": "https://api.github.com/repos/facebook/react"
},
{
"url": "https://api.github.com/repos/facebook/react/deployments/52898511",
"id": 52898511,
"node_id": "MDEwOkRlcGxveW1lbnQ1Mjg5ODUxMQ==",
"sha": "84506e9473fbf4695f915ed5895c7651ebbccd0d",
"ref": "84506e9473fbf4695f915ed5895c7651ebbccd0d",
"task": "deploy",
"payload": {},
"original_environment": "github-pages",
"environment": "github-pages",
"description": null,
"creator": {
"login": "reactjs-bot",
"id": 11689122,
"node_id": "MDQ6VXNlcjExNjg5MTIy",
"avatar_url": "https://avatars0.githubusercontent.com/u/11689122?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/reactjs-bot",
"html_url": "https://github.com/reactjs-bot",
"followers_url": "https://api.github.com/users/reactjs-bot/followers",
"following_url": "https://api.github.com/users/reactjs-bot/following{/other_user}",
"gists_url": "https://api.github.com/users/reactjs-bot/gists{/gist_id}",
"starred_url": "https://api.github.com/users/reactjs-bot/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/reactjs-bot/subscriptions",
"organizations_url": "https://api.github.com/users/reactjs-bot/orgs",
"repos_url": "https://api.github.com/users/reactjs-bot/repos",
"events_url": "https://api.github.com/users/reactjs-bot/events{/privacy}",
"received_events_url": "https://api.github.com/users/reactjs-bot/received_events",
"type": "User",
"site_admin": false
},
"created_at": "2017-09-27T10:26:38Z",
"updated_at": "2017-09-27T10:26:38Z",
"statuses_url": "https://api.github.com/repos/facebook/react/deployments/52898511/statuses",
"repository_url": "https://api.github.com/repos/facebook/react"
},
{
"url": "https://api.github.com/repos/facebook/react/deployments/52896290",
"id": 52896290,
"node_id": "MDEwOkRlcGxveW1lbnQ1Mjg5NjI5MA==",
"sha": "44485824f73bde73804a74caedba24200169d6bc",
"ref": "44485824f73bde73804a74caedba24200169d6bc",
"task": "deploy",
"payload": {},
"original_environment": "github-pages",
"environment": "github-pages",
"description": null,
"creator": {
"login": "reactjs-bot",
"id": 11689122,
"node_id": "MDQ6VXNlcjExNjg5MTIy",
"avatar_url": "https://avatars0.githubusercontent.com/u/11689122?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/reactjs-bot",
"html_url": "https://github.com/reactjs-bot",
"followers_url": "https://api.github.com/users/reactjs-bot/followers",
"following_url": "https://api.github.com/users/reactjs-bot/following{/other_user}",
"gists_url": "https://api.github.com/users/reactjs-bot/gists{/gist_id}",
"starred_url": "https://api.github.com/users/reactjs-bot/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/reactjs-bot/subscriptions",
"organizations_url": "https://api.github.com/users/reactjs-bot/orgs",
"repos_url": "https://api.github.com/users/reactjs-bot/repos",
"events_url": "https://api.github.com/users/reactjs-bot/events{/privacy}",
"received_events_url": "https://api.github.com/users/reactjs-bot/received_events",
"type": "User",
"site_admin": false
},
"created_at": "2017-09-27T10:03:34Z",
"updated_at": "2017-09-27T10:03:34Z",
"statuses_url": "https://api.github.com/repos/facebook/react/deployments/52896290/statuses",
"repository_url": "https://api.github.com/repos/facebook/react"
},
{
"url": "https://api.github.com/repos/facebook/react/deployments/52893794",
"id": 52893794,
"node_id": "MDEwOkRlcGxveW1lbnQ1Mjg5Mzc5NA==",
"sha": "2586adb41c16641c8b08e63a4a4f4f0527ff09af",
"ref": "2586adb41c16641c8b08e63a4a4f4f0527ff09af",
"task": "deploy",
"payload": {},
"original_environment": "github-pages",
"environment": "github-pages",
"description": null,
"creator": {
"login": "reactjs-bot",
"id": 11689122,
"node_id": "MDQ6VXNlcjExNjg5MTIy",
"avatar_url": "https://avatars0.githubusercontent.com/u/11689122?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/reactjs-bot",
"html_url": "https://github.com/reactjs-bot",
"followers_url": "https://api.github.com/users/reactjs-bot/followers",
"following_url": "https://api.github.com/users/reactjs-bot/following{/other_user}",
"gists_url": "https://api.github.com/users/reactjs-bot/gists{/gist_id}",
"starred_url": "https://api.github.com/users/reactjs-bot/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/reactjs-bot/subscriptions",
"organizations_url": "https://api.github.com/users/reactjs-bot/orgs",
"repos_url": "https://api.github.com/users/reactjs-bot/repos",
"events_url": "https://api.github.com/users/reactjs-bot/events{/privacy}",
"received_events_url": "https://api.github.com/users/reactjs-bot/received_events",
"type": "User",
"site_admin": false
},
"created_at": "2017-09-27T09:41:04Z",
"updated_at": "2017-09-27T09:41:04Z",
"statuses_url": "https://api.github.com/repos/facebook/react/deployments/52893794/statuses",
"repository_url": "https://api.github.com/repos/facebook/react"
},
{
"url": "https://api.github.com/repos/facebook/react/deployments/52833904",
"id": 52833904,
"node_id": "MDEwOkRlcGxveW1lbnQ1MjgzMzkwNA==",
"sha": "cff02339dd11a65b984eee8bae6dc0461640f1ab",
"ref": "cff02339dd11a65b984eee8bae6dc0461640f1ab",
"task": "deploy",
"payload": {},
"original_environment": "github-pages",
"environment": "github-pages",
"description": null,
"creator": {
"login": "reactjs-bot",
"id": 11689122,
"node_id": "MDQ6VXNlcjExNjg5MTIy",
"avatar_url": "https://avatars0.githubusercontent.com/u/11689122?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/reactjs-bot",
"html_url": "https://github.com/reactjs-bot",
"followers_url": "https://api.github.com/users/reactjs-bot/followers",
"following_url": "https://api.github.com/users/reactjs-bot/following{/other_user}",
"gists_url": "https://api.github.com/users/reactjs-bot/gists{/gist_id}",
"starred_url": "https://api.github.com/users/reactjs-bot/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/reactjs-bot/subscriptions",
"organizations_url": "https://api.github.com/users/reactjs-bot/orgs",
"repos_url": "https://api.github.com/users/reactjs-bot/repos",
"events_url": "https://api.github.com/users/reactjs-bot/events{/privacy}",
"received_events_url": "https://api.github.com/users/reactjs-bot/received_events",
"type": "User",
"site_admin": false
},
"created_at": "2017-09-26T21:53:01Z",
"updated_at": "2017-09-26T21:53:01Z",
"statuses_url": "https://api.github.com/repos/facebook/react/deployments/52833904/statuses",
"repository_url": "https://api.github.com/repos/facebook/react"
},
{
"url": "https://api.github.com/repos/facebook/react/deployments/52829828",
"id": 52829828,
"node_id": "MDEwOkRlcGxveW1lbnQ1MjgyOTgyOA==",
"sha": "a7ba8745cbc311fda421572462bfc84e674cce1f",
"ref": "a7ba8745cbc311fda421572462bfc84e674cce1f",
"task": "deploy",
"payload": {},
"original_environment": "github-pages",
"environment": "github-pages",
"description": null,
"creator": {
"login": "gaearon",
"id": 810438,
"node_id": "MDQ6VXNlcjgxMDQzOA==",
"avatar_url": "https://avatars0.githubusercontent.com/u/810438?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/gaearon",
"html_url": "https://github.com/gaearon",
"followers_url": "https://api.github.com/users/gaearon/followers",
"following_url": "https://api.github.com/users/gaearon/following{/other_user}",
"gists_url": "https://api.github.com/users/gaearon/gists{/gist_id}",
"starred_url": "https://api.github.com/users/gaearon/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/gaearon/subscriptions",
"organizations_url": "https://api.github.com/users/gaearon/orgs",
"repos_url": "https://api.github.com/users/gaearon/repos",
"events_url": "https://api.github.com/users/gaearon/events{/privacy}",
"received_events_url": "https://api.github.com/users/gaearon/received_events",
"type": "User",
"site_admin": false
},
"created_at": "2017-09-26T21:14:10Z",
"updated_at": "2017-09-26T21:14:10Z",
"statuses_url": "https://api.github.com/repos/facebook/react/deployments/52829828/statuses",
"repository_url": "https://api.github.com/repos/facebook/react"
},
{
"url": "https://api.github.com/repos/facebook/react/deployments/52828491",
"id": 52828491,
"node_id": "MDEwOkRlcGxveW1lbnQ1MjgyODQ5MQ==",
"sha": "4b8c8bfa7e760dfd29a48ca1c9e074b4817a51b2",
"ref": "4b8c8bfa7e760dfd29a48ca1c9e074b4817a51b2",
"task": "deploy",
"payload": {},
"original_environment": "github-pages",
"environment": "github-pages",
"description": null,
"creator": {
"login": "reactjs-bot",
"id": 11689122,
"node_id": "MDQ6VXNlcjExNjg5MTIy",
"avatar_url": "https://avatars0.githubusercontent.com/u/11689122?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/reactjs-bot",
"html_url": "https://github.com/reactjs-bot",
"followers_url": "https://api.github.com/users/reactjs-bot/followers",
"following_url": "https://api.github.com/users/reactjs-bot/following{/other_user}",
"gists_url": "https://api.github.com/users/reactjs-bot/gists{/gist_id}",
"starred_url": "https://api.github.com/users/reactjs-bot/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/reactjs-bot/subscriptions",
"organizations_url": "https://api.github.com/users/reactjs-bot/orgs",
"repos_url": "https://api.github.com/users/reactjs-bot/repos",
"events_url": "https://api.github.com/users/reactjs-bot/events{/privacy}",
"received_events_url": "https://api.github.com/users/reactjs-bot/received_events",
"type": "User",
"site_admin": false
},
"created_at": "2017-09-26T21:02:34Z",
"updated_at": "2017-09-26T21:02:34Z",
"statuses_url": "https://api.github.com/repos/facebook/react/deployments/52828491/statuses",
"repository_url": "https://api.github.com/repos/facebook/react"
},
{
"url": "https://api.github.com/repos/facebook/react/deployments/52815821",
"id": 52815821,
"node_id": "MDEwOkRlcGxveW1lbnQ1MjgxNTgyMQ==",
"sha": "e3dbfcd19d92625dc77edd779ebe96d4031b28f4",
"ref": "e3dbfcd19d92625dc77edd779ebe96d4031b28f4",
"task": "deploy",
"payload": {},
"original_environment": "github-pages",
"environment": "github-pages",
"description": null,
"creator": {
"login": "reactjs-bot",
"id": 11689122,
"node_id": "MDQ6VXNlcjExNjg5MTIy",
"avatar_url": "https://avatars0.githubusercontent.com/u/11689122?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/reactjs-bot",
"html_url": "https://github.com/reactjs-bot",
"followers_url": "https://api.github.com/users/reactjs-bot/followers",
"following_url": "https://api.github.com/users/reactjs-bot/following{/other_user}",
"gists_url": "https://api.github.com/users/reactjs-bot/gists{/gist_id}",
"starred_url": "https://api.github.com/users/reactjs-bot/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/reactjs-bot/subscriptions",
"organizations_url": "https://api.github.com/users/reactjs-bot/orgs",
"repos_url": "https://api.github.com/users/reactjs-bot/repos",
"events_url": "https://api.github.com/users/reactjs-bot/events{/privacy}",
"received_events_url": "https://api.github.com/users/reactjs-bot/received_events",
"type": "User",
"site_admin": false
},
"created_at": "2017-09-26T19:10:46Z",
"updated_at": "2017-09-26T19:10:46Z",
"statuses_url": "https://api.github.com/repos/facebook/react/deployments/52815821/statuses",
"repository_url": "https://api.github.com/repos/facebook/react"
},
{
"url": "https://api.github.com/repos/facebook/react/deployments/52815680",
"id": 52815680,
"node_id": "MDEwOkRlcGxveW1lbnQ1MjgxNTY4MA==",
"sha": "2cb3e9060f71e690ecf203b221b2d3b767d91c04",
"ref": "2cb3e9060f71e690ecf203b221b2d3b767d91c04",
"task": "deploy",
"payload": {},
"original_environment": "github-pages",
"environment": "github-pages",
"description": null,
"creator": {
"login": "reactjs-bot",
"id": 11689122,
"node_id": "MDQ6VXNlcjExNjg5MTIy",
"avatar_url": "https://avatars0.githubusercontent.com/u/11689122?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/reactjs-bot",
"html_url": "https://github.com/reactjs-bot",
"followers_url": "https://api.github.com/users/reactjs-bot/followers",
"following_url": "https://api.github.com/users/reactjs-bot/following{/other_user}",
"gists_url": "https://api.github.com/users/reactjs-bot/gists{/gist_id}",
"starred_url": "https://api.github.com/users/reactjs-bot/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/reactjs-bot/subscriptions",
"organizations_url": "https://api.github.com/users/reactjs-bot/orgs",
"repos_url": "https://api.github.com/users/reactjs-bot/repos",
"events_url": "https://api.github.com/users/reactjs-bot/events{/privacy}",
"received_events_url": "https://api.github.com/users/reactjs-bot/received_events",
"type": "User",
"site_admin": false
},
"created_at": "2017-09-26T19:09:38Z",
"updated_at": "2017-09-26T19:09:38Z",
"statuses_url": "https://api.github.com/repos/facebook/react/deployments/52815680/statuses",
"repository_url": "https://api.github.com/repos/facebook/react"
},
{
"url": "https://api.github.com/repos/facebook/react/deployments/52814129",
"id": 52814129,
"node_id": "MDEwOkRlcGxveW1lbnQ1MjgxNDEyOQ==",
"sha": "1daac009b3d6a74d39647de0324cd2207de582fd",
"ref": "1daac009b3d6a74d39647de0324cd2207de582fd",
"task": "deploy",
"payload": {},
"original_environment": "github-pages",
"environment": "github-pages",
"description": null,
"creator": {
"login": "reactjs-bot",
"id": 11689122,
"node_id": "MDQ6VXNlcjExNjg5MTIy",
"avatar_url": "https://avatars0.githubusercontent.com/u/11689122?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/reactjs-bot",
"html_url": "https://github.com/reactjs-bot",
"followers_url": "https://api.github.com/users/reactjs-bot/followers",
"following_url": "https://api.github.com/users/reactjs-bot/following{/other_user}",
"gists_url": "https://api.github.com/users/reactjs-bot/gists{/gist_id}",
"starred_url": "https://api.github.com/users/reactjs-bot/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/reactjs-bot/subscriptions",
"organizations_url": "https://api.github.com/users/reactjs-bot/orgs",
"repos_url": "https://api.github.com/users/reactjs-bot/repos",
"events_url": "https://api.github.com/users/reactjs-bot/events{/privacy}",
"received_events_url": "https://api.github.com/users/reactjs-bot/received_events",
"type": "User",
"site_admin": false
},
"created_at": "2017-09-26T18:56:16Z",
"updated_at": "2017-09-26T18:56:16Z",
"statuses_url": "https://api.github.com/repos/facebook/react/deployments/52814129/statuses",
"repository_url": "https://api.github.com/repos/facebook/react"
},
{
"url": "https://api.github.com/repos/facebook/react/deployments/52809932",
"id": 52809932,
"node_id": "MDEwOkRlcGxveW1lbnQ1MjgwOTkzMg==",
"sha": "546b9f6d5907d15df95c4532f55ff4aece2d68e7",
"ref": "546b9f6d5907d15df95c4532f55ff4aece2d68e7",
"task": "deploy",
"payload": {},
"original_environment": "github-pages",
"environment": "github-pages",
"description": null,
"creator": {
"login": "reactjs-bot",
"id": 11689122,
"node_id": "MDQ6VXNlcjExNjg5MTIy",
"avatar_url": "https://avatars0.githubusercontent.com/u/11689122?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/reactjs-bot",
"html_url": "https://github.com/reactjs-bot",
"followers_url": "https://api.github.com/users/reactjs-bot/followers",
"following_url": "https://api.github.com/users/reactjs-bot/following{/other_user}",
"gists_url": "https://api.github.com/users/reactjs-bot/gists{/gist_id}",
"starred_url": "https://api.github.com/users/reactjs-bot/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/reactjs-bot/subscriptions",
"organizations_url": "https://api.github.com/users/reactjs-bot/orgs",
"repos_url": "https://api.github.com/users/reactjs-bot/repos",
"events_url": "https://api.github.com/users/reactjs-bot/events{/privacy}",
"received_events_url": "https://api.github.com/users/reactjs-bot/received_events",
"type": "User",
"site_admin": false
},
"created_at": "2017-09-26T18:18:55Z",
"updated_at": "2017-09-26T18:18:55Z",
"statuses_url": "https://api.github.com/repos/facebook/react/deployments/52809932/statuses",
"repository_url": "https://api.github.com/repos/facebook/react"
},
{
"url": "https://api.github.com/repos/facebook/react/deployments/52806981",
"id": 52806981,
"node_id": "MDEwOkRlcGxveW1lbnQ1MjgwNjk4MQ==",
"sha": "37639a7c87a603d824377a031dc549a9e5b2c3d3",
"ref": "37639a7c87a603d824377a031dc549a9e5b2c3d3",
"task": "deploy",
"payload": {},
"original_environment": "github-pages",
"environment": "github-pages",
"description": null,
"creator": {
"login": "reactjs-bot",
"id": 11689122,
"node_id": "MDQ6VXNlcjExNjg5MTIy",
"avatar_url": "https://avatars0.githubusercontent.com/u/11689122?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/reactjs-bot",
"html_url": "https://github.com/reactjs-bot",
"followers_url": "https://api.github.com/users/reactjs-bot/followers",
"following_url": "https://api.github.com/users/reactjs-bot/following{/other_user}",
"gists_url": "https://api.github.com/users/reactjs-bot/gists{/gist_id}",
"starred_url": "https://api.github.com/users/reactjs-bot/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/reactjs-bot/subscriptions",
"organizations_url": "https://api.github.com/users/reactjs-bot/orgs",
"repos_url": "https://api.github.com/users/reactjs-bot/repos",
"events_url": "https://api.github.com/users/reactjs-bot/events{/privacy}",
"received_events_url": "https://api.github.com/users/reactjs-bot/received_events",
"type": "User",
"site_admin": false
},
"created_at": "2017-09-26T17:54:27Z",
"updated_at": "2017-09-26T17:54:27Z",
"statuses_url": "https://api.github.com/repos/facebook/react/deployments/52806981/statuses",
"repository_url": "https://api.github.com/repos/facebook/react"
},
{
"url": "https://api.github.com/repos/facebook/react/deployments/52802744",
"id": 52802744,
"node_id": "MDEwOkRlcGxveW1lbnQ1MjgwMjc0NA==",
"sha": "eb0967749cf92c58c01fe83fcddd4c4fa5441579",
"ref": "eb0967749cf92c58c01fe83fcddd4c4fa5441579",
"task": "deploy",
"payload": {},
"original_environment": "github-pages",
"environment": "github-pages",
"description": null,
"creator": {
"login": "gaearon",
"id": 810438,
"node_id": "MDQ6VXNlcjgxMDQzOA==",
"avatar_url": "https://avatars0.githubusercontent.com/u/810438?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/gaearon",
"html_url": "https://github.com/gaearon",
"followers_url": "https://api.github.com/users/gaearon/followers",
"following_url": "https://api.github.com/users/gaearon/following{/other_user}",
"gists_url": "https://api.github.com/users/gaearon/gists{/gist_id}",
"starred_url": "https://api.github.com/users/gaearon/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/gaearon/subscriptions",
"organizations_url": "https://api.github.com/users/gaearon/orgs",
"repos_url": "https://api.github.com/users/gaearon/repos",
"events_url": "https://api.github.com/users/gaearon/events{/privacy}",
"received_events_url": "https://api.github.com/users/gaearon/received_events",
"type": "User",
"site_admin": false
},
"created_at": "2017-09-26T17:18:39Z",
"updated_at": "2017-09-26T17:18:39Z",
"statuses_url": "https://api.github.com/repos/facebook/react/deployments/52802744/statuses",
"repository_url": "https://api.github.com/repos/facebook/react"
},
{
"url": "https://api.github.com/repos/facebook/react/deployments/52794517",
"id": 52794517,
"node_id": "MDEwOkRlcGxveW1lbnQ1Mjc5NDUxNw==",
"sha": "9d80600b631ee30f790dbbbe741adf5a06ad36e9",
"ref": "9d80600b631ee30f790dbbbe741adf5a06ad36e9",
"task": "deploy",
"payload": {},
"original_environment": "github-pages",
"environment": "github-pages",
"description": null,
"creator": {
"login": "acdlite",
"id": 3624098,
"node_id": "MDQ6VXNlcjM2MjQwOTg=",
"avatar_url": "https://avatars0.githubusercontent.com/u/3624098?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/acdlite",
"html_url": "https://github.com/acdlite",
"followers_url": "https://api.github.com/users/acdlite/followers",
"following_url": "https://api.github.com/users/acdlite/following{/other_user}",
"gists_url": "https://api.github.com/users/acdlite/gists{/gist_id}",
"starred_url": "https://api.github.com/users/acdlite/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/acdlite/subscriptions",
"organizations_url": "https://api.github.com/users/acdlite/orgs",
"repos_url": "https://api.github.com/users/acdlite/repos",
"events_url": "https://api.github.com/users/acdlite/events{/privacy}",
"received_events_url": "https://api.github.com/users/acdlite/received_events",
"type": "User",
"site_admin": false
},
"created_at": "2017-09-26T16:13:06Z",
"updated_at": "2017-09-26T16:13:06Z",
"statuses_url": "https://api.github.com/repos/facebook/react/deployments/52794517/statuses",
"repository_url": "https://api.github.com/repos/facebook/react"
},
{
"url": "https://api.github.com/repos/facebook/react/deployments/52755314",
"id": 52755314,
"node_id": "MDEwOkRlcGxveW1lbnQ1Mjc1NTMxNA==",
"sha": "021abead6f4251541a7921d60cd3ed5d2199b0b1",
"ref": "021abead6f4251541a7921d60cd3ed5d2199b0b1",
"task": "deploy",
"payload": {},
"original_environment": "github-pages",
"environment": "github-pages",
"description": null,
"creator": {
"login": "reactjs-bot",
"id": 11689122,
"node_id": "MDQ6VXNlcjExNjg5MTIy",
"avatar_url": "https://avatars0.githubusercontent.com/u/11689122?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/reactjs-bot",
"html_url": "https://github.com/reactjs-bot",
"followers_url": "https://api.github.com/users/reactjs-bot/followers",
"following_url": "https://api.github.com/users/reactjs-bot/following{/other_user}",
"gists_url": "https://api.github.com/users/reactjs-bot/gists{/gist_id}",
"starred_url": "https://api.github.com/users/reactjs-bot/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/reactjs-bot/subscriptions",
"organizations_url": "https://api.github.com/users/reactjs-bot/orgs",
"repos_url": "https://api.github.com/users/reactjs-bot/repos",
"events_url": "https://api.github.com/users/reactjs-bot/events{/privacy}",
"received_events_url": "https://api.github.com/users/reactjs-bot/received_events",
"type": "User",
"site_admin": false
},
"created_at": "2017-09-26T10:49:55Z",
"updated_at": "2017-09-26T10:49:55Z",
"statuses_url": "https://api.github.com/repos/facebook/react/deployments/52755314/statuses",
"repository_url": "https://api.github.com/repos/facebook/react"
},
{
"url": "https://api.github.com/repos/facebook/react/deployments/52754767",
"id": 52754767,
"node_id": "MDEwOkRlcGxveW1lbnQ1Mjc1NDc2Nw==",
"sha": "383128d3d0f3e23adb555d1a14f259e0015a9159",
"ref": "383128d3d0f3e23adb555d1a14f259e0015a9159",
"task": "deploy",
"payload": {},
"original_environment": "github-pages",
"environment": "github-pages",
"description": null,
"creator": {
"login": "reactjs-bot",
"id": 11689122,
"node_id": "MDQ6VXNlcjExNjg5MTIy",
"avatar_url": "https://avatars0.githubusercontent.com/u/11689122?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/reactjs-bot",
"html_url": "https://github.com/reactjs-bot",
"followers_url": "https://api.github.com/users/reactjs-bot/followers",
"following_url": "https://api.github.com/users/reactjs-bot/following{/other_user}",
"gists_url": "https://api.github.com/users/reactjs-bot/gists{/gist_id}",
"starred_url": "https://api.github.com/users/reactjs-bot/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/reactjs-bot/subscriptions",
"organizations_url": "https://api.github.com/users/reactjs-bot/orgs",
"repos_url": "https://api.github.com/users/reactjs-bot/repos",
"events_url": "https://api.github.com/users/reactjs-bot/events{/privacy}",
"received_events_url": "https://api.github.com/users/reactjs-bot/received_events",
"type": "User",
"site_admin": false
},
"created_at": "2017-09-26T10:43:53Z",
"updated_at": "2017-09-26T10:43:53Z",
"statuses_url": "https://api.github.com/repos/facebook/react/deployments/52754767/statuses",
"repository_url": "https://api.github.com/repos/facebook/react"
},
{
"url": "https://api.github.com/repos/facebook/react/deployments/52701906",
"id": 52701906,
"node_id": "MDEwOkRlcGxveW1lbnQ1MjcwMTkwNg==",
"sha": "f1ae286b15abe105c6bf1ef6e1d22f1eb23766ed",
"ref": "f1ae286b15abe105c6bf1ef6e1d22f1eb23766ed",
"task": "deploy",
"payload": {},
"original_environment": "github-pages",
"environment": "github-pages",
"description": null,
"creator": {
"login": "reactjs-bot",
"id": 11689122,
"node_id": "MDQ6VXNlcjExNjg5MTIy",
"avatar_url": "https://avatars0.githubusercontent.com/u/11689122?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/reactjs-bot",
"html_url": "https://github.com/reactjs-bot",
"followers_url": "https://api.github.com/users/reactjs-bot/followers",
"following_url": "https://api.github.com/users/reactjs-bot/following{/other_user}",
"gists_url": "https://api.github.com/users/reactjs-bot/gists{/gist_id}",
"starred_url": "https://api.github.com/users/reactjs-bot/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/reactjs-bot/subscriptions",
"organizations_url": "https://api.github.com/users/reactjs-bot/orgs",
"repos_url": "https://api.github.com/users/reactjs-bot/repos",
"events_url": "https://api.github.com/users/reactjs-bot/events{/privacy}",
"received_events_url": "https://api.github.com/users/reactjs-bot/received_events",
"type": "User",
"site_admin": false
},
"created_at": "2017-09-26T00:27:13Z",
"updated_at": "2017-09-26T00:27:13Z",
"statuses_url": "https://api.github.com/repos/facebook/react/deployments/52701906/statuses",
"repository_url": "https://api.github.com/repos/facebook/react"
},
{
"url": "https://api.github.com/repos/facebook/react/deployments/51323169",
"id": 51323169,
"node_id": "MDEwOkRlcGxveW1lbnQ1MTMyMzE2OQ==",
"sha": "62b34d3573c32086512b83f39f2ce7369c2c0cf2",
"ref": "62b34d3573c32086512b83f39f2ce7369c2c0cf2",
"task": "deploy",
"payload": {},
"original_environment": "github-pages",
"environment": "github-pages",
"description": null,
"creator": {
"login": "gaearon",
"id": 810438,
"node_id": "MDQ6VXNlcjgxMDQzOA==",
"avatar_url": "https://avatars0.githubusercontent.com/u/810438?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/gaearon",
"html_url": "https://github.com/gaearon",
"followers_url": "https://api.github.com/users/gaearon/followers",
"following_url": "https://api.github.com/users/gaearon/following{/other_user}",
"gists_url": "https://api.github.com/users/gaearon/gists{/gist_id}",
"starred_url": "https://api.github.com/users/gaearon/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/gaearon/subscriptions",
"organizations_url": "https://api.github.com/users/gaearon/orgs",
"repos_url": "https://api.github.com/users/gaearon/repos",
"events_url": "https://api.github.com/users/gaearon/events{/privacy}",
"received_events_url": "https://api.github.com/users/gaearon/received_events",
"type": "User",
"site_admin": false
},
"created_at": "2017-09-14T12:44:01Z",
"updated_at": "2017-09-14T12:44:01Z",
"statuses_url": "https://api.github.com/repos/facebook/react/deployments/51323169/statuses",
"repository_url": "https://api.github.com/repos/facebook/react"
},
{
"url": "https://api.github.com/repos/facebook/react/deployments/50835174",
"id": 50835174,
"node_id": "MDEwOkRlcGxveW1lbnQ1MDgzNTE3NA==",
"sha": "56b0878f8ce4a0377c921332d92d51538befb19d",
"ref": "56b0878f8ce4a0377c921332d92d51538befb19d",
"task": "deploy",
"payload": {},
"original_environment": "github-pages",
"environment": "github-pages",
"description": null,
"creator": {
"login": "reactjs-bot",
"id": 11689122,
"node_id": "MDQ6VXNlcjExNjg5MTIy",
"avatar_url": "https://avatars0.githubusercontent.com/u/11689122?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/reactjs-bot",
"html_url": "https://github.com/reactjs-bot",
"followers_url": "https://api.github.com/users/reactjs-bot/followers",
"following_url": "https://api.github.com/users/reactjs-bot/following{/other_user}",
"gists_url": "https://api.github.com/users/reactjs-bot/gists{/gist_id}",
"starred_url": "https://api.github.com/users/reactjs-bot/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/reactjs-bot/subscriptions",
"organizations_url": "https://api.github.com/users/reactjs-bot/orgs",
"repos_url": "https://api.github.com/users/reactjs-bot/repos",
"events_url": "https://api.github.com/users/reactjs-bot/events{/privacy}",
"received_events_url": "https://api.github.com/users/reactjs-bot/received_events",
"type": "User",
"site_admin": false
},
"created_at": "2017-09-10T21:59:22Z",
"updated_at": "2017-09-10T21:59:22Z",
"statuses_url": "https://api.github.com/repos/facebook/react/deployments/50835174/statuses",
"repository_url": "https://api.github.com/repos/facebook/react"
},
{
"url": "https://api.github.com/repos/facebook/react/deployments/50826231",
"id": 50826231,
"node_id": "MDEwOkRlcGxveW1lbnQ1MDgyNjIzMQ==",
"sha": "eb38eace01f1a9c3da37ab2f227c2d2d2258e4b8",
"ref": "eb38eace01f1a9c3da37ab2f227c2d2d2258e4b8",
"task": "deploy",
"payload": {},
"original_environment": "github-pages",
"environment": "github-pages",
"description": null,
"creator": {
"login": "reactjs-bot",
"id": 11689122,
"node_id": "MDQ6VXNlcjExNjg5MTIy",
"avatar_url": "https://avatars0.githubusercontent.com/u/11689122?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/reactjs-bot",
"html_url": "https://github.com/reactjs-bot",
"followers_url": "https://api.github.com/users/reactjs-bot/followers",
"following_url": "https://api.github.com/users/reactjs-bot/following{/other_user}",
"gists_url": "https://api.github.com/users/reactjs-bot/gists{/gist_id}",
"starred_url": "https://api.github.com/users/reactjs-bot/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/reactjs-bot/subscriptions",
"organizations_url": "https://api.github.com/users/reactjs-bot/orgs",
"repos_url": "https://api.github.com/users/reactjs-bot/repos",
"events_url": "https://api.github.com/users/reactjs-bot/events{/privacy}",
"received_events_url": "https://api.github.com/users/reactjs-bot/received_events",
"type": "User",
"site_admin": false
},
"created_at": "2017-09-10T19:50:39Z",
"updated_at": "2017-09-10T19:50:39Z",
"statuses_url": "https://api.github.com/repos/facebook/react/deployments/50826231/statuses",
"repository_url": "https://api.github.com/repos/facebook/react"
},
{
"url": "https://api.github.com/repos/facebook/react/deployments/50650581",
"id": 50650581,
"node_id": "MDEwOkRlcGxveW1lbnQ1MDY1MDU4MQ==",
"sha": "af9848423360a1f249c174a0f75e14be2217a6ae",
"ref": "af9848423360a1f249c174a0f75e14be2217a6ae",
"task": "deploy",
"payload": {},
"original_environment": "github-pages",
"environment": "github-pages",
"description": null,
"creator": {
"login": "gaearon",
"id": 810438,
"node_id": "MDQ6VXNlcjgxMDQzOA==",
"avatar_url": "https://avatars0.githubusercontent.com/u/810438?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/gaearon",
"html_url": "https://github.com/gaearon",
"followers_url": "https://api.github.com/users/gaearon/followers",
"following_url": "https://api.github.com/users/gaearon/following{/other_user}",
"gists_url": "https://api.github.com/users/gaearon/gists{/gist_id}",
"starred_url": "https://api.github.com/users/gaearon/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/gaearon/subscriptions",
"organizations_url": "https://api.github.com/users/gaearon/orgs",
"repos_url": "https://api.github.com/users/gaearon/repos",
"events_url": "https://api.github.com/users/gaearon/events{/privacy}",
"received_events_url": "https://api.github.com/users/gaearon/received_events",
"type": "User",
"site_admin": false
},
"created_at": "2017-09-08T19:33:59Z",
"updated_at": "2017-09-08T19:33:59Z",
"statuses_url": "https://api.github.com/repos/facebook/react/deployments/50650581/statuses",
"repository_url": "https://api.github.com/repos/facebook/react"
},
{
"url": "https://api.github.com/repos/facebook/react/deployments/50370163",
"id": 50370163,
"node_id": "MDEwOkRlcGxveW1lbnQ1MDM3MDE2Mw==",
"sha": "cbf4858b390748bfef1ef957b01c62baa840f801",
"ref": "cbf4858b390748bfef1ef957b01c62baa840f801",
"task": "deploy",
"payload": {},
"original_environment": "github-pages",
"environment": "github-pages",
"description": null,
"creator": {
"login": "flarnie",
"id": 1114467,
"node_id": "MDQ6VXNlcjExMTQ0Njc=",
"avatar_url": "https://avatars2.githubusercontent.com/u/1114467?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/flarnie",
"html_url": "https://github.com/flarnie",
"followers_url": "https://api.github.com/users/flarnie/followers",
"following_url": "https://api.github.com/users/flarnie/following{/other_user}",
"gists_url": "https://api.github.com/users/flarnie/gists{/gist_id}",
"starred_url": "https://api.github.com/users/flarnie/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/flarnie/subscriptions",
"organizations_url": "https://api.github.com/users/flarnie/orgs",
"repos_url": "https://api.github.com/users/flarnie/repos",
"events_url": "https://api.github.com/users/flarnie/events{/privacy}",
"received_events_url": "https://api.github.com/users/flarnie/received_events",
"type": "User",
"site_admin": false
},
"created_at": "2017-09-06T18:14:34Z",
"updated_at": "2017-09-06T18:14:34Z",
"statuses_url": "https://api.github.com/repos/facebook/react/deployments/50370163/statuses",
"repository_url": "https://api.github.com/repos/facebook/react"
}
],
commits:[
{
"sha": "bc1f3e1a691be8926b48859fc96ef7ca76590d1e",
"node_id": "MDY6Q29tbWl0MTAyNzAyNTA6YmMxZjNlMWE2OTFiZTg5MjZiNDg4NTlmYzk2ZWY3Y2E3NjU5MGQxZQ==",
"commit": {
"author": {
"name": "Brian Vaughn",
"email": "bvaughn@fb.com",
"date": "2020-01-15T17:45:16Z"
},
"committer": {
"name": "GitHub",
"email": "noreply@github.com",
"date": "2020-01-15T17:45:16Z"
},
"message": "Fix DevTools Flow error for key-sort function (#17849)",
"tree": {
"sha": "5b8a86ed8f7845f4dd0c408bf0f2bae7a3aafccc",
"url": "https://api.github.com/repos/facebook/react/git/trees/5b8a86ed8f7845f4dd0c408bf0f2bae7a3aafccc"
},
"url": "https://api.github.com/repos/facebook/react/git/commits/bc1f3e1a691be8926b48859fc96ef7ca76590d1e",
"comment_count": 0,
"verification": {
"verified": true,
"reason": "valid",
"signature": "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJeH0+sCRBK7hj4Ov3rIwAAdHIIAIaNBWgEMyvhU4zNcsD3PHB2\nxFDlXd55xkiLeisq122oVJvKrB/ARewx4T9ZC6dmaSJqh5o32nX9lmgWw1FNMHOb\nzAXZXgeBJ5lo005RbAkNUA3tAaNjtKBju6R6sbLK5GXmYH9BwSfCXyG7bg3jLQkW\nFYHch7kX+Qu07ebR5tJUd653xVzFOZLFZr9gTzzl/Z5Em6IKXggzJJNDe2lFucxR\nBCHbTlIeIBRbUx95Nxo+YTgdcJdFjrJc8+UOOt3OCiWz1b+8OygD1DqC4xRrhDtl\nTjyTwNKR9ktDwTE4BsFTEYkNoljCXeoBYnKR9FVmoXweZhkpfe1lU6Vg+5KVAK4=\n=fPbo\n-----END PGP SIGNATURE-----\n",
"payload": "tree 5b8a86ed8f7845f4dd0c408bf0f2bae7a3aafccc\nparent b6173e643a4311b9b1cf039824b2f3d7b974b8cf\nauthor Brian Vaughn <bvaughn@fb.com> 1579110316 -0800\ncommitter GitHub <noreply@github.com> 1579110316 -0800\n\nFix DevTools Flow error for key-sort function (#17849)\n\n"
}
},
"url": "https://api.github.com/repos/facebook/react/commits/bc1f3e1a691be8926b48859fc96ef7ca76590d1e",
"html_url": "https://github.com/facebook/react/commit/bc1f3e1a691be8926b48859fc96ef7ca76590d1e",
"comments_url": "https://api.github.com/repos/facebook/react/commits/bc1f3e1a691be8926b48859fc96ef7ca76590d1e/comments",
"author": {
"login": "bvaughn",
"id": 29597,
"node_id": "MDQ6VXNlcjI5NTk3",
"avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/bvaughn",
"html_url": "https://github.com/bvaughn",
"followers_url": "https://api.github.com/users/bvaughn/followers",
"following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
"gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
"starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
"organizations_url": "https://api.github.com/users/bvaughn/orgs",
"repos_url": "https://api.github.com/users/bvaughn/repos",
"events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
"received_events_url": "https://api.github.com/users/bvaughn/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "web-flow",
"id": 19864447,
"node_id": "MDQ6VXNlcjE5ODY0NDQ3",
"avatar_url": "https://avatars3.githubusercontent.com/u/19864447?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/web-flow",
"html_url": "https://github.com/web-flow",
"followers_url": "https://api.github.com/users/web-flow/followers",
"following_url": "https://api.github.com/users/web-flow/following{/other_user}",
"gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
"starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
"organizations_url": "https://api.github.com/users/web-flow/orgs",
"repos_url": "https://api.github.com/users/web-flow/repos",
"events_url": "https://api.github.com/users/web-flow/events{/privacy}",
"received_events_url": "https://api.github.com/users/web-flow/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "b6173e643a4311b9b1cf039824b2f3d7b974b8cf",
"url": "https://api.github.com/repos/facebook/react/commits/b6173e643a4311b9b1cf039824b2f3d7b974b8cf",
"html_url": "https://github.com/facebook/react/commit/b6173e643a4311b9b1cf039824b2f3d7b974b8cf"
}
]
},
{
"sha": "b6173e643a4311b9b1cf039824b2f3d7b974b8cf",
"node_id": "MDY6Q29tbWl0MTAyNzAyNTA6YjYxNzNlNjQzYTQzMTFiOWIxY2YwMzk4MjRiMmYzZDdiOTc0YjhjZg==",
"commit": {
"author": {
"name": "Dominic Gannaway",
"email": "trueadm@users.noreply.github.com",
"date": "2020-01-15T09:50:09Z"
},
"committer": {
"name": "GitHub",
"email": "noreply@github.com",
"date": "2020-01-15T09:50:09Z"
},
"message": "[react-interactions] Add DO_NOT_USE to Scope methods (#17835)",
"tree": {
"sha": "ea9e2b462ef7b4808a9a56f052b52f715a2eb78a",
"url": "https://api.github.com/repos/facebook/react/git/trees/ea9e2b462ef7b4808a9a56f052b52f715a2eb78a"
},
"url": "https://api.github.com/repos/facebook/react/git/commits/b6173e643a4311b9b1cf039824b2f3d7b974b8cf",
"comment_count": 0,
"verification": {
"verified": true,
"reason": "valid",
"signature": "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJeHuBRCRBK7hj4Ov3rIwAAdHIIAA/8qlkn+/xjKUvoPrvPK5Wz\nE20t2v/VQbqynGT76v+W+b8TQTmlKziLF8TJeba84q0DjkfNj/UcfY3T2NJxuTwE\nT0A0gW5wxB6oq3M+cFdc4PPrCBiGwI+M/u1p1zKItj3LCzypX6dXNX0jgBjxy8UI\ndbMk2OyW7z279gK+KNTtYVSA5o/jeZjKBbrSramkMVrKmZ9973JmYgIArAszSDKg\nENIZOR6WPDwhBr7K/ipKx0CjDdkHg1BL3gIWiA5SrJ+OGJ40obDEV7kSZEhmAgMJ\nsEdzkLAbjcBlS/Qp2W0mHcPCfosz3SwBzrxltZS7jI0hU6m+4ZeElR8sywRET/Q=\n=fQLu\n-----END PGP SIGNATURE-----\n",
"payload": "tree ea9e2b462ef7b4808a9a56f052b52f715a2eb78a\nparent 8aefb1995cc6d46cc29778b0c54bd989478973c0\nauthor Dominic Gannaway <trueadm@users.noreply.github.com> 1579081809 +0000\ncommitter GitHub <noreply@github.com> 1579081809 +0000\n\n[react-interactions] Add DO_NOT_USE to Scope methods (#17835)\n\n"
}
},
"url": "https://api.github.com/repos/facebook/react/commits/b6173e643a4311b9b1cf039824b2f3d7b974b8cf",
"html_url": "https://github.com/facebook/react/commit/b6173e643a4311b9b1cf039824b2f3d7b974b8cf",
"comments_url": "https://api.github.com/repos/facebook/react/commits/b6173e643a4311b9b1cf039824b2f3d7b974b8cf/comments",
"author": {
"login": "trueadm",
"id": 1519870,
"node_id": "MDQ6VXNlcjE1MTk4NzA=",
"avatar_url": "https://avatars0.githubusercontent.com/u/1519870?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/trueadm",
"html_url": "https://github.com/trueadm",
"followers_url": "https://api.github.com/users/trueadm/followers",
"following_url": "https://api.github.com/users/trueadm/following{/other_user}",
"gists_url": "https://api.github.com/users/trueadm/gists{/gist_id}",
"starred_url": "https://api.github.com/users/trueadm/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/trueadm/subscriptions",
"organizations_url": "https://api.github.com/users/trueadm/orgs",
"repos_url": "https://api.github.com/users/trueadm/repos",
"events_url": "https://api.github.com/users/trueadm/events{/privacy}",
"received_events_url": "https://api.github.com/users/trueadm/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "web-flow",
"id": 19864447,
"node_id": "MDQ6VXNlcjE5ODY0NDQ3",
"avatar_url": "https://avatars3.githubusercontent.com/u/19864447?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/web-flow",
"html_url": "https://github.com/web-flow",
"followers_url": "https://api.github.com/users/web-flow/followers",
"following_url": "https://api.github.com/users/web-flow/following{/other_user}",
"gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
"starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
"organizations_url": "https://api.github.com/users/web-flow/orgs",
"repos_url": "https://api.github.com/users/web-flow/repos",
"events_url": "https://api.github.com/users/web-flow/events{/privacy}",
"received_events_url": "https://api.github.com/users/web-flow/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "8aefb1995cc6d46cc29778b0c54bd989478973c0",
"url": "https://api.github.com/repos/facebook/react/commits/8aefb1995cc6d46cc29778b0c54bd989478973c0",
"html_url": "https://github.com/facebook/react/commit/8aefb1995cc6d46cc29778b0c54bd989478973c0"
}
]
},
{
"sha": "8aefb1995cc6d46cc29778b0c54bd989478973c0",
"node_id": "MDY6Q29tbWl0MTAyNzAyNTA6OGFlZmIxOTk1Y2M2ZDQ2Y2MyOTc3OGIwYzU0YmQ5ODk0Nzg5NzNjMA==",
"commit": {
"author": {
"name": "Brian Vaughn",
"email": "bvaughn@fb.com",
"date": "2020-01-14T23:38:09Z"
},
"committer": {
"name": "GitHub",
"email": "noreply@github.com",
"date": "2020-01-14T23:38:09Z"
},
"message": "Removed 'reactInternal' reference in DevTools overlay highlighter (#17841)",
"tree": {
"sha": "8ab4fad9b06ac333c18e6e90fe8b8a66b114308b",
"url": "https://api.github.com/repos/facebook/react/git/trees/8ab4fad9b06ac333c18e6e90fe8b8a66b114308b"
},
"url": "https://api.github.com/repos/facebook/react/git/commits/8aefb1995cc6d46cc29778b0c54bd989478973c0",
"comment_count": 0,
"verification": {
"verified": true,
"reason": "valid",
"signature": "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJeHlDhCRBK7hj4Ov3rIwAAdHIIAJyHSgGwZNIYJbwFYb72w4tm\nOqGPacGwLf7cMk9MHJYN3aKu8Ub6z02l0xhjEHprirfEQ2q395BU07bln14PF7EA\nULQ83X3xvv9a69oYq0vS61iPCH9O8eEdHs08S8Qvya/enR1tuUwpvrbRvPxwrVkG\nj9jsH/Q7U/YlLu/QRcNF69Fm/NgJY/MNHnVEZxCjR135IZh83SYd7EShUCivnuCr\ndZyVz3kDw3RbreNe1ssUX4BD3JJywWi10BSWt7VGb8PY6017qE4bwWHGLbxxh4AP\n2sX6fXPnNqz+Mx4gRbIF2u4C/9BsKuBd8QHI+quRaURepcKKn56w0kTDiyfQCJM=\n=Rj1t\n-----END PGP SIGNATURE-----\n",
"payload": "tree 8ab4fad9b06ac333c18e6e90fe8b8a66b114308b\nparent 643dcb5526f05957ffaf1c8ba991563f988d655b\nauthor Brian Vaughn <bvaughn@fb.com> 1579045089 -0800\ncommitter GitHub <noreply@github.com> 1579045089 -0800\n\nRemoved 'reactInternal' reference in DevTools overlay highlighter (#17841)\n\n"
}
},
"url": "https://api.github.com/repos/facebook/react/commits/8aefb1995cc6d46cc29778b0c54bd989478973c0",
"html_url": "https://github.com/facebook/react/commit/8aefb1995cc6d46cc29778b0c54bd989478973c0",
"comments_url": "https://api.github.com/repos/facebook/react/commits/8aefb1995cc6d46cc29778b0c54bd989478973c0/comments",
"author": {
"login": "bvaughn",
"id": 29597,
"node_id": "MDQ6VXNlcjI5NTk3",
"avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/bvaughn",
"html_url": "https://github.com/bvaughn",
"followers_url": "https://api.github.com/users/bvaughn/followers",
"following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
"gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
"starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
"organizations_url": "https://api.github.com/users/bvaughn/orgs",
"repos_url": "https://api.github.com/users/bvaughn/repos",
"events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
"received_events_url": "https://api.github.com/users/bvaughn/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "web-flow",
"id": 19864447,
"node_id": "MDQ6VXNlcjE5ODY0NDQ3",
"avatar_url": "https://avatars3.githubusercontent.com/u/19864447?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/web-flow",
"html_url": "https://github.com/web-flow",
"followers_url": "https://api.github.com/users/web-flow/followers",
"following_url": "https://api.github.com/users/web-flow/following{/other_user}",
"gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
"starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
"organizations_url": "https://api.github.com/users/web-flow/orgs",
"repos_url": "https://api.github.com/users/web-flow/repos",
"events_url": "https://api.github.com/users/web-flow/events{/privacy}",
"received_events_url": "https://api.github.com/users/web-flow/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "643dcb5526f05957ffaf1c8ba991563f988d655b",
"url": "https://api.github.com/repos/facebook/react/commits/643dcb5526f05957ffaf1c8ba991563f988d655b",
"html_url": "https://github.com/facebook/react/commit/643dcb5526f05957ffaf1c8ba991563f988d655b"
}
]
},
{
"sha": "643dcb5526f05957ffaf1c8ba991563f988d655b",
"node_id": "MDY6Q29tbWl0MTAyNzAyNTA6NjQzZGNiNTUyNmYwNTk1N2ZmYWYxYzhiYTk5MTU2M2Y5ODhkNjU1Yg==",
"commit": {
"author": {
"name": "Jason Williams",
"email": "936006+jasonwilliams@users.noreply.github.com",
"date": "2020-01-14T23:20:42Z"
},
"committer": {
"name": "Dan Abramov",
"email": "dan.abramov@gmail.com",
"date": "2020-01-14T23:20:42Z"
},
"message": "Add support for Node v13 for development (#17837)",
"tree": {
"sha": "c297fa4b073456d2960491178870ddd84606eaaf",
"url": "https://api.github.com/repos/facebook/react/git/trees/c297fa4b073456d2960491178870ddd84606eaaf"
},
"url": "https://api.github.com/repos/facebook/react/git/commits/643dcb5526f05957ffaf1c8ba991563f988d655b",
"comment_count": 0,
"verification": {
"verified": false,
"reason": "unsigned",
"signature": null,
"payload": null
}
},
"url": "https://api.github.com/repos/facebook/react/commits/643dcb5526f05957ffaf1c8ba991563f988d655b",
"html_url": "https://github.com/facebook/react/commit/643dcb5526f05957ffaf1c8ba991563f988d655b",
"comments_url": "https://api.github.com/repos/facebook/react/commits/643dcb5526f05957ffaf1c8ba991563f988d655b/comments",
"author": {
"login": "jasonwilliams",
"id": 936006,
"node_id": "MDQ6VXNlcjkzNjAwNg==",
"avatar_url": "https://avatars3.githubusercontent.com/u/936006?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/jasonwilliams",
"html_url": "https://github.com/jasonwilliams",
"followers_url": "https://api.github.com/users/jasonwilliams/followers",
"following_url": "https://api.github.com/users/jasonwilliams/following{/other_user}",
"gists_url": "https://api.github.com/users/jasonwilliams/gists{/gist_id}",
"starred_url": "https://api.github.com/users/jasonwilliams/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/jasonwilliams/subscriptions",
"organizations_url": "https://api.github.com/users/jasonwilliams/orgs",
"repos_url": "https://api.github.com/users/jasonwilliams/repos",
"events_url": "https://api.github.com/users/jasonwilliams/events{/privacy}",
"received_events_url": "https://api.github.com/users/jasonwilliams/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "gaearon",
"id": 810438,
"node_id": "MDQ6VXNlcjgxMDQzOA==",
"avatar_url": "https://avatars0.githubusercontent.com/u/810438?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/gaearon",
"html_url": "https://github.com/gaearon",
"followers_url": "https://api.github.com/users/gaearon/followers",
"following_url": "https://api.github.com/users/gaearon/following{/other_user}",
"gists_url": "https://api.github.com/users/gaearon/gists{/gist_id}",
"starred_url": "https://api.github.com/users/gaearon/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/gaearon/subscriptions",
"organizations_url": "https://api.github.com/users/gaearon/orgs",
"repos_url": "https://api.github.com/users/gaearon/repos",
"events_url": "https://api.github.com/users/gaearon/events{/privacy}",
"received_events_url": "https://api.github.com/users/gaearon/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "1e1a98942225771f86d8a81b5ac561a9fbff9263",
"url": "https://api.github.com/repos/facebook/react/commits/1e1a98942225771f86d8a81b5ac561a9fbff9263",
"html_url": "https://github.com/facebook/react/commit/1e1a98942225771f86d8a81b5ac561a9fbff9263"
}
]
},
{
"sha": "1e1a98942225771f86d8a81b5ac561a9fbff9263",
"node_id": "MDY6Q29tbWl0MTAyNzAyNTA6MWUxYTk4OTQyMjI1NzcxZjg2ZDhhODFiNWFjNTYxYTlmYmZmOTI2Mw==",
"commit": {
"author": {
"name": "Brian Vaughn",
"email": "bvaughn@fb.com",
"date": "2020-01-14T22:00:28Z"
},
"committer": {
"name": "GitHub",
"email": "noreply@github.com",
"date": "2020-01-14T22:00:28Z"
},
"message": "Re-enabled DevTools context menu option in Firefox to inspect function prop source (#17838)",
"tree": {
"sha": "835a28be261d004bf5227295c0c6023d5867724c",
"url": "https://api.github.com/repos/facebook/react/git/trees/835a28be261d004bf5227295c0c6023d5867724c"
},
"url": "https://api.github.com/repos/facebook/react/git/commits/1e1a98942225771f86d8a81b5ac561a9fbff9263",
"comment_count": 0,
"verification": {
"verified": true,
"reason": "valid",
"signature": "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJeHjn8CRBK7hj4Ov3rIwAAdHIIADP3SEkTMW4IplIocXfZJPLO\nIqL95i2TzJbcGe1dYstknkIUt/8DR5eJUi6NecLMrJGNzNzpPs3W7TpWpxmS4sjD\nCNJPDGcfNvXiHuHqUlTEEEao0au9+rjbiS9RLfsAmgbGVOJOFvdjdXWFY5Zg0SNu\nAg69hJ7UsPoJk8tHPeLqbRvup+kE+KoHiwRWb2F+KdtnPcI2KliKKJN/wWBOFKOl\nhoqi7GFXeK0V6EWfLZ2Nc2zIjz/DXAr1MTfsGPFF/nVVyr6fgdpRiTQYGOv1knVL\nSo37oTeCz+uNunYS/2Yyx9I+taVZpeY9w/bOHOtnXhzHV9OU7jHqeN3GCAn4yds=\n=Gu2B\n-----END PGP SIGNATURE-----\n",
"payload": "tree 835a28be261d004bf5227295c0c6023d5867724c\nparent 3bd6adceda6335adc5f5bbae148dd2ff290eeea6\nauthor Brian Vaughn <bvaughn@fb.com> 1579039228 -0800\ncommitter GitHub <noreply@github.com> 1579039228 -0800\n\nRe-enabled DevTools context menu option in Firefox to inspect function prop source (#17838)\n\n"
}
},
"url": "https://api.github.com/repos/facebook/react/commits/1e1a98942225771f86d8a81b5ac561a9fbff9263",
"html_url": "https://github.com/facebook/react/commit/1e1a98942225771f86d8a81b5ac561a9fbff9263",
"comments_url": "https://api.github.com/repos/facebook/react/commits/1e1a98942225771f86d8a81b5ac561a9fbff9263/comments",
"author": {
"login": "bvaughn",
"id": 29597,
"node_id": "MDQ6VXNlcjI5NTk3",
"avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/bvaughn",
"html_url": "https://github.com/bvaughn",
"followers_url": "https://api.github.com/users/bvaughn/followers",
"following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
"gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
"starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
"organizations_url": "https://api.github.com/users/bvaughn/orgs",
"repos_url": "https://api.github.com/users/bvaughn/repos",
"events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
"received_events_url": "https://api.github.com/users/bvaughn/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "web-flow",
"id": 19864447,
"node_id": "MDQ6VXNlcjE5ODY0NDQ3",
"avatar_url": "https://avatars3.githubusercontent.com/u/19864447?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/web-flow",
"html_url": "https://github.com/web-flow",
"followers_url": "https://api.github.com/users/web-flow/followers",
"following_url": "https://api.github.com/users/web-flow/following{/other_user}",
"gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
"starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
"organizations_url": "https://api.github.com/users/web-flow/orgs",
"repos_url": "https://api.github.com/users/web-flow/repos",
"events_url": "https://api.github.com/users/web-flow/events{/privacy}",
"received_events_url": "https://api.github.com/users/web-flow/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "3bd6adceda6335adc5f5bbae148dd2ff290eeea6",
"url": "https://api.github.com/repos/facebook/react/commits/3bd6adceda6335adc5f5bbae148dd2ff290eeea6",
"html_url": "https://github.com/facebook/react/commit/3bd6adceda6335adc5f5bbae148dd2ff290eeea6"
}
]
},
{
"sha": "3bd6adceda6335adc5f5bbae148dd2ff290eeea6",
"node_id": "MDY6Q29tbWl0MTAyNzAyNTA6M2JkNmFkY2VkYTYzMzVhZGM1ZjViYmFlMTQ4ZGQyZmYyOTBlZWVhNg==",
"commit": {
"author": {
"name": "Nicolas Gallagher",
"email": "necolas@fb.com",
"date": "2020-01-14T21:52:52Z"
},
"committer": {
"name": "GitHub",
"email": "noreply@github.com",
"date": "2020-01-14T21:52:52Z"
},
"message": "Update typescript package and jest preprocessor (#17839)",
"tree": {
"sha": "d553d09e78a019a952a57d6c456390c6a8650799",
"url": "https://api.github.com/repos/facebook/react/git/trees/d553d09e78a019a952a57d6c456390c6a8650799"
},
"url": "https://api.github.com/repos/facebook/react/git/commits/3bd6adceda6335adc5f5bbae148dd2ff290eeea6",
"comment_count": 0,
"verification": {
"verified": true,
"reason": "valid",
"signature": "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJeHjg0CRBK7hj4Ov3rIwAAdHIIAEWX2eo/XFk5QvLyvCov7Ue3\nJ+W/2FQBaS9untRBWXx9MeMM1D/ZvxwDSdrdX7crH9ufRlR/9zAO+nAp9SX6fWnT\nkfKaKHGIm2gl5G8vl37umpTMZeLbMW0ZAIIXSglwJRaBIDIpd70Z42atL7kNtB30\n3leIYszy6bRwXFnujUe0trgBna8mdVRxBATkUInk5TSO/5gBflo4woZYJdg2L3mN\nWWRPSjaqsG9UBesdIMLT4iYhoNWmK3Xvghrn87mjUG0vnuasnVyqBAIRD/HAb0N1\nQIx48XhEJxbRVErob9HA2SC7xn4DtXg4Y2YfyorXSYcdy1SWf3kiUzGgiqxXWBs=\n=inBO\n-----END PGP SIGNATURE-----\n",
"payload": "tree d553d09e78a019a952a57d6c456390c6a8650799\nparent 50eafef07e10874cc11dd2a79065ca28dabb0e46\nauthor Nicolas Gallagher <necolas@fb.com> 1579038772 -0800\ncommitter GitHub <noreply@github.com> 1579038772 -0800\n\nUpdate typescript package and jest preprocessor (#17839)\n\n"
}
},
"url": "https://api.github.com/repos/facebook/react/commits/3bd6adceda6335adc5f5bbae148dd2ff290eeea6",
"html_url": "https://github.com/facebook/react/commit/3bd6adceda6335adc5f5bbae148dd2ff290eeea6",
"comments_url": "https://api.github.com/repos/facebook/react/commits/3bd6adceda6335adc5f5bbae148dd2ff290eeea6/comments",
"author": {
"login": "necolas",
"id": 239676,
"node_id": "MDQ6VXNlcjIzOTY3Ng==",
"avatar_url": "https://avatars2.githubusercontent.com/u/239676?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/necolas",
"html_url": "https://github.com/necolas",
"followers_url": "https://api.github.com/users/necolas/followers",
"following_url": "https://api.github.com/users/necolas/following{/other_user}",
"gists_url": "https://api.github.com/users/necolas/gists{/gist_id}",
"starred_url": "https://api.github.com/users/necolas/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/necolas/subscriptions",
"organizations_url": "https://api.github.com/users/necolas/orgs",
"repos_url": "https://api.github.com/users/necolas/repos",
"events_url": "https://api.github.com/users/necolas/events{/privacy}",
"received_events_url": "https://api.github.com/users/necolas/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "web-flow",
"id": 19864447,
"node_id": "MDQ6VXNlcjE5ODY0NDQ3",
"avatar_url": "https://avatars3.githubusercontent.com/u/19864447?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/web-flow",
"html_url": "https://github.com/web-flow",
"followers_url": "https://api.github.com/users/web-flow/followers",
"following_url": "https://api.github.com/users/web-flow/following{/other_user}",
"gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
"starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
"organizations_url": "https://api.github.com/users/web-flow/orgs",
"repos_url": "https://api.github.com/users/web-flow/repos",
"events_url": "https://api.github.com/users/web-flow/events{/privacy}",
"received_events_url": "https://api.github.com/users/web-flow/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "50eafef07e10874cc11dd2a79065ca28dabb0e46",
"url": "https://api.github.com/repos/facebook/react/commits/50eafef07e10874cc11dd2a79065ca28dabb0e46",
"html_url": "https://github.com/facebook/react/commit/50eafef07e10874cc11dd2a79065ca28dabb0e46"
}
]
},
{
"sha": "50eafef07e10874cc11dd2a79065ca28dabb0e46",
"node_id": "MDY6Q29tbWl0MTAyNzAyNTA6NTBlYWZlZjA3ZTEwODc0Y2MxMWRkMmE3OTA2NWNhMjhkYWJiMGU0Ng==",
"commit": {
"author": {
"name": "Nicolas Gallagher",
"email": "necolas@fb.com",
"date": "2020-01-14T17:26:44Z"
},
"committer": {
"name": "GitHub",
"email": "noreply@github.com",
"date": "2020-01-14T17:26:44Z"
},
"message": "Update babel-eslint and eslint packages (#17829)",
"tree": {
"sha": "1914217b4522314e6397062cec5c8be0c9c44026",
"url": "https://api.github.com/repos/facebook/react/git/trees/1914217b4522314e6397062cec5c8be0c9c44026"
},
"url": "https://api.github.com/repos/facebook/react/git/commits/50eafef07e10874cc11dd2a79065ca28dabb0e46",
"comment_count": 0,
"verification": {
"verified": true,
"reason": "valid",
"signature": "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJeHfnUCRBK7hj4Ov3rIwAAdHIIAIVmTIEy5Sx/tfielbACnRqt\nTWl1N8ZCBz05+R8Y1DCV5f2ECTHRY2yAZG5tlrzbd5x5rXSElRr04gCY62mdePGe\nzdOcqtcEle2MGBx/1JuWplGX9E976HX444POfGHte6CVqBoypyYFjEy4Sn8dr8fW\n3lD4yOoRrSeKbHy35SW4M00rewGLytnO8ayjh3iDephSQYXwp2fYgznPxYuBa+00\nQ23FsYkbNPx9slmHT2YiAFNrhRmYhisUec1jJTzwjKhtnjNojkbLGggg6WWYH2ct\npAfkPNkJZM4z0Re1+rdoCIAZy6ud/IJ5GAgQN+nLF3XCkNjiKd4+ZBpAMraVdbA=\n=1XAG\n-----END PGP SIGNATURE-----\n",
"payload": "tree 1914217b4522314e6397062cec5c8be0c9c44026\nparent 4f480d064531fa51d9a3bdd0b7a1b0367c2ee209\nauthor Nicolas Gallagher <necolas@fb.com> 1579022804 -0800\ncommitter GitHub <noreply@github.com> 1579022804 -0800\n\nUpdate babel-eslint and eslint packages (#17829)\n\n"
}
},
"url": "https://api.github.com/repos/facebook/react/commits/50eafef07e10874cc11dd2a79065ca28dabb0e46",
"html_url": "https://github.com/facebook/react/commit/50eafef07e10874cc11dd2a79065ca28dabb0e46",
"comments_url": "https://api.github.com/repos/facebook/react/commits/50eafef07e10874cc11dd2a79065ca28dabb0e46/comments",
"author": {
"login": "necolas",
"id": 239676,
"node_id": "MDQ6VXNlcjIzOTY3Ng==",
"avatar_url": "https://avatars2.githubusercontent.com/u/239676?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/necolas",
"html_url": "https://github.com/necolas",
"followers_url": "https://api.github.com/users/necolas/followers",
"following_url": "https://api.github.com/users/necolas/following{/other_user}",
"gists_url": "https://api.github.com/users/necolas/gists{/gist_id}",
"starred_url": "https://api.github.com/users/necolas/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/necolas/subscriptions",
"organizations_url": "https://api.github.com/users/necolas/orgs",
"repos_url": "https://api.github.com/users/necolas/repos",
"events_url": "https://api.github.com/users/necolas/events{/privacy}",
"received_events_url": "https://api.github.com/users/necolas/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "web-flow",
"id": 19864447,
"node_id": "MDQ6VXNlcjE5ODY0NDQ3",
"avatar_url": "https://avatars3.githubusercontent.com/u/19864447?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/web-flow",
"html_url": "https://github.com/web-flow",
"followers_url": "https://api.github.com/users/web-flow/followers",
"following_url": "https://api.github.com/users/web-flow/following{/other_user}",
"gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
"starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
"organizations_url": "https://api.github.com/users/web-flow/orgs",
"repos_url": "https://api.github.com/users/web-flow/repos",
"events_url": "https://api.github.com/users/web-flow/events{/privacy}",
"received_events_url": "https://api.github.com/users/web-flow/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "4f480d064531fa51d9a3bdd0b7a1b0367c2ee209",
"url": "https://api.github.com/repos/facebook/react/commits/4f480d064531fa51d9a3bdd0b7a1b0367c2ee209",
"html_url": "https://github.com/facebook/react/commit/4f480d064531fa51d9a3bdd0b7a1b0367c2ee209"
}
]
},
{
"sha": "4f480d064531fa51d9a3bdd0b7a1b0367c2ee209",
"node_id": "MDY6Q29tbWl0MTAyNzAyNTA6NGY0ODBkMDY0NTMxZmE1MWQ5YTNiZGQwYjdhMWIwMzY3YzJlZTIwOQ==",
"commit": {
"author": {
"name": "André",
"email": "andre.wibbeke@gmail.com",
"date": "2020-01-12T19:54:12Z"
},
"committer": {
"name": "Nicolas Gallagher",
"email": "necolas@fb.com",
"date": "2020-01-12T19:54:12Z"
},
"message": "Fix typo in TestCase description (#17077)",
"tree": {
"sha": "6fe5129088f5dc0fdb07e34382f6bd10a2cd654c",
"url": "https://api.github.com/repos/facebook/react/git/trees/6fe5129088f5dc0fdb07e34382f6bd10a2cd654c"
},
"url": "https://api.github.com/repos/facebook/react/git/commits/4f480d064531fa51d9a3bdd0b7a1b0367c2ee209",
"comment_count": 0,
"verification": {
"verified": false,
"reason": "unsigned",
"signature": null,
"payload": null
}
},
"url": "https://api.github.com/repos/facebook/react/commits/4f480d064531fa51d9a3bdd0b7a1b0367c2ee209",
"html_url": "https://github.com/facebook/react/commit/4f480d064531fa51d9a3bdd0b7a1b0367c2ee209",
"comments_url": "https://api.github.com/repos/facebook/react/commits/4f480d064531fa51d9a3bdd0b7a1b0367c2ee209/comments",
"author": {
"login": "pennyJack",
"id": 21247504,
"node_id": "MDQ6VXNlcjIxMjQ3NTA0",
"avatar_url": "https://avatars0.githubusercontent.com/u/21247504?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/pennyJack",
"html_url": "https://github.com/pennyJack",
"followers_url": "https://api.github.com/users/pennyJack/followers",
"following_url": "https://api.github.com/users/pennyJack/following{/other_user}",
"gists_url": "https://api.github.com/users/pennyJack/gists{/gist_id}",
"starred_url": "https://api.github.com/users/pennyJack/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/pennyJack/subscriptions",
"organizations_url": "https://api.github.com/users/pennyJack/orgs",
"repos_url": "https://api.github.com/users/pennyJack/repos",
"events_url": "https://api.github.com/users/pennyJack/events{/privacy}",
"received_events_url": "https://api.github.com/users/pennyJack/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "necolas",
"id": 239676,
"node_id": "MDQ6VXNlcjIzOTY3Ng==",
"avatar_url": "https://avatars2.githubusercontent.com/u/239676?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/necolas",
"html_url": "https://github.com/necolas",
"followers_url": "https://api.github.com/users/necolas/followers",
"following_url": "https://api.github.com/users/necolas/following{/other_user}",
"gists_url": "https://api.github.com/users/necolas/gists{/gist_id}",
"starred_url": "https://api.github.com/users/necolas/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/necolas/subscriptions",
"organizations_url": "https://api.github.com/users/necolas/orgs",
"repos_url": "https://api.github.com/users/necolas/repos",
"events_url": "https://api.github.com/users/necolas/events{/privacy}",
"received_events_url": "https://api.github.com/users/necolas/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "f4ca909e0e001b2318cac4ed61773a24f4244b0c",
"url": "https://api.github.com/repos/facebook/react/commits/f4ca909e0e001b2318cac4ed61773a24f4244b0c",
"html_url": "https://github.com/facebook/react/commit/f4ca909e0e001b2318cac4ed61773a24f4244b0c"
}
]
},
{
"sha": "f4ca909e0e001b2318cac4ed61773a24f4244b0c",
"node_id": "MDY6Q29tbWl0MTAyNzAyNTA6ZjRjYTkwOWUwZTAwMWIyMzE4Y2FjNGVkNjE3NzNhMjRmNDI0NGIwYw==",
"commit": {
"author": {
"name": "Dan",
"email": "dan.abramov@gmail.com",
"date": "2020-01-12T17:54:30Z"
},
"committer": {
"name": "Dan",
"email": "dan.abramov@gmail.com",
"date": "2020-01-12T17:54:30Z"
},
"message": "react-refresh@0.7.2",
"tree": {
"sha": "6fe5129088f5dc0fdb07e34382f6bd10a2cd654c",
"url": "https://api.github.com/repos/facebook/react/git/trees/6fe5129088f5dc0fdb07e34382f6bd10a2cd654c"
},
"url": "https://api.github.com/repos/facebook/react/git/commits/f4ca909e0e001b2318cac4ed61773a24f4244b0c",
"comment_count": 0,
"verification": {
"verified": false,
"reason": "unsigned",
"signature": null,
"payload": null
}
},
"url": "https://api.github.com/repos/facebook/react/commits/f4ca909e0e001b2318cac4ed61773a24f4244b0c",
"html_url": "https://github.com/facebook/react/commit/f4ca909e0e001b2318cac4ed61773a24f4244b0c",
"comments_url": "https://api.github.com/repos/facebook/react/commits/f4ca909e0e001b2318cac4ed61773a24f4244b0c/comments",
"author": {
"login": "gaearon",
"id": 810438,
"node_id": "MDQ6VXNlcjgxMDQzOA==",
"avatar_url": "https://avatars0.githubusercontent.com/u/810438?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/gaearon",
"html_url": "https://github.com/gaearon",
"followers_url": "https://api.github.com/users/gaearon/followers",
"following_url": "https://api.github.com/users/gaearon/following{/other_user}",
"gists_url": "https://api.github.com/users/gaearon/gists{/gist_id}",
"starred_url": "https://api.github.com/users/gaearon/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/gaearon/subscriptions",
"organizations_url": "https://api.github.com/users/gaearon/orgs",
"repos_url": "https://api.github.com/users/gaearon/repos",
"events_url": "https://api.github.com/users/gaearon/events{/privacy}",
"received_events_url": "https://api.github.com/users/gaearon/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "gaearon",
"id": 810438,
"node_id": "MDQ6VXNlcjgxMDQzOA==",
"avatar_url": "https://avatars0.githubusercontent.com/u/810438?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/gaearon",
"html_url": "https://github.com/gaearon",
"followers_url": "https://api.github.com/users/gaearon/followers",
"following_url": "https://api.github.com/users/gaearon/following{/other_user}",
"gists_url": "https://api.github.com/users/gaearon/gists{/gist_id}",
"starred_url": "https://api.github.com/users/gaearon/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/gaearon/subscriptions",
"organizations_url": "https://api.github.com/users/gaearon/orgs",
"repos_url": "https://api.github.com/users/gaearon/repos",
"events_url": "https://api.github.com/users/gaearon/events{/privacy}",
"received_events_url": "https://api.github.com/users/gaearon/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "255d9ac5f58e85903e27128cf263dd6d2f9e7133",
"url": "https://api.github.com/repos/facebook/react/commits/255d9ac5f58e85903e27128cf263dd6d2f9e7133",
"html_url": "https://github.com/facebook/react/commit/255d9ac5f58e85903e27128cf263dd6d2f9e7133"
}
]
},
{
"sha": "255d9ac5f58e85903e27128cf263dd6d2f9e7133",
"node_id": "MDY6Q29tbWl0MTAyNzAyNTA6MjU1ZDlhYzVmNThlODU5MDNlMjcxMjhjZjI2M2RkNmQyZjllNzEzMw==",
"commit": {
"author": {
"name": "Dan Abramov",
"email": "dan.abramov@gmail.com",
"date": "2020-01-12T17:53:50Z"
},
"committer": {
"name": "GitHub",
"email": "noreply@github.com",
"date": "2020-01-12T17:53:50Z"
},
"message": "[Fresh] Fix edge case with early function call (#17824)",
"tree": {
"sha": "712ff3d773d2849af9395d83b178580e8f31c0bd",
"url": "https://api.github.com/repos/facebook/react/git/trees/712ff3d773d2849af9395d83b178580e8f31c0bd"
},
"url": "https://api.github.com/repos/facebook/react/git/commits/255d9ac5f58e85903e27128cf263dd6d2f9e7133",
"comment_count": 0,
"verification": {
"verified": true,
"reason": "valid",
"signature": "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJeG10uCRBK7hj4Ov3rIwAAdHIIAEXl1Nt3BgGvV4M/Ahxfh1B7\nuJZMUn1TuU9XRcpG8jhyBOY8i7qCEjNoG2/i4+iSXFIgZRWdHhj7HEL1pOqt9pmB\nN8Aef45J3aJrXLtuNaXBcFpsU7HCXaFUDX4xK3NZl3OTW9zNMqHcQIK92ToS25ZP\nKMmjvZCcPSHY7RNlBGsvyHKvhovJCc2QwcmJRD7YU3h9VvzGMTJ1bYa85udViVMn\n/3OYAXvOazo1buhIBS4S3XWGb+Hptmdd2WAyPktoMYdbOEPMJknx1i8YHKVciNnM\nW2ujXCVr5TaU9MFAyq9HKBIz4btTEvgicq+jJH7Omcb6CHEAgEsO89CWlGUKOy0=\n=4aQC\n-----END PGP SIGNATURE-----\n",
"payload": "tree 712ff3d773d2849af9395d83b178580e8f31c0bd\nparent 64aae7b06fa47e126b0ba9c0ba9896caa803528e\nauthor Dan Abramov <dan.abramov@gmail.com> 1578851630 +0000\ncommitter GitHub <noreply@github.com> 1578851630 +0000\n\n[Fresh] Fix edge case with early function call (#17824)\n\n"
}
},
"url": "https://api.github.com/repos/facebook/react/commits/255d9ac5f58e85903e27128cf263dd6d2f9e7133",
"html_url": "https://github.com/facebook/react/commit/255d9ac5f58e85903e27128cf263dd6d2f9e7133",
"comments_url": "https://api.github.com/repos/facebook/react/commits/255d9ac5f58e85903e27128cf263dd6d2f9e7133/comments",
"author": {
"login": "gaearon",
"id": 810438,
"node_id": "MDQ6VXNlcjgxMDQzOA==",
"avatar_url": "https://avatars0.githubusercontent.com/u/810438?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/gaearon",
"html_url": "https://github.com/gaearon",
"followers_url": "https://api.github.com/users/gaearon/followers",
"following_url": "https://api.github.com/users/gaearon/following{/other_user}",
"gists_url": "https://api.github.com/users/gaearon/gists{/gist_id}",
"starred_url": "https://api.github.com/users/gaearon/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/gaearon/subscriptions",
"organizations_url": "https://api.github.com/users/gaearon/orgs",
"repos_url": "https://api.github.com/users/gaearon/repos",
"events_url": "https://api.github.com/users/gaearon/events{/privacy}",
"received_events_url": "https://api.github.com/users/gaearon/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "web-flow",
"id": 19864447,
"node_id": "MDQ6VXNlcjE5ODY0NDQ3",
"avatar_url": "https://avatars3.githubusercontent.com/u/19864447?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/web-flow",
"html_url": "https://github.com/web-flow",
"followers_url": "https://api.github.com/users/web-flow/followers",
"following_url": "https://api.github.com/users/web-flow/following{/other_user}",
"gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
"starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
"organizations_url": "https://api.github.com/users/web-flow/orgs",
"repos_url": "https://api.github.com/users/web-flow/repos",
"events_url": "https://api.github.com/users/web-flow/events{/privacy}",
"received_events_url": "https://api.github.com/users/web-flow/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "64aae7b06fa47e126b0ba9c0ba9896caa803528e",
"url": "https://api.github.com/repos/facebook/react/commits/64aae7b06fa47e126b0ba9c0ba9896caa803528e",
"html_url": "https://github.com/facebook/react/commit/64aae7b06fa47e126b0ba9c0ba9896caa803528e"
}
]
},
{
"sha": "64aae7b06fa47e126b0ba9c0ba9896caa803528e",
"node_id": "MDY6Q29tbWl0MTAyNzAyNTA6NjRhYWU3YjA2ZmE0N2UxMjZiMGJhOWMwYmE5ODk2Y2FhODAzNTI4ZQ==",
"commit": {
"author": {
"name": "Nicolas Gallagher",
"email": "necolas@fb.com",
"date": "2020-01-10T18:57:34Z"
},
"committer": {
"name": "GitHub",
"email": "noreply@github.com",
"date": "2020-01-10T18:57:34Z"
},
"message": "Fix issue template for questions (#17817)",
"tree": {
"sha": "422c3250927604ecefa06f4a0b9e73156555f651",
"url": "https://api.github.com/repos/facebook/react/git/trees/422c3250927604ecefa06f4a0b9e73156555f651"
},
"url": "https://api.github.com/repos/facebook/react/git/commits/64aae7b06fa47e126b0ba9c0ba9896caa803528e",
"comment_count": 0,
"verification": {
"verified": true,
"reason": "valid",
"signature": "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJeGMkeCRBK7hj4Ov3rIwAAdHIIAGNSyS9P/x0B2KJ4NsB4H/xQ\ns5dTGz+m5Z3LkDZqJrj2gsHiIwYdntwv3g+eSboNg82crC8TWcaCA77NqRTwzmkF\nJt5DT8CblyyFhM47PRy+uAr03h5rzPYFqnVyw2qlhBZVan3pGVo/3FpjLiE0wKjA\nSJXFHJq9apy9swBWcSkiL4YJuYboLLfp0OGgsyT4mW6JvuxEgGKaE7mLSBYPz0n8\nqNku9/fbkl4X/sGeIarVnlj2LMN0AIloP/gZQO5DOdeiFIS8rqxifLEt0p9tAVFE\n+dvFpZR6kG1OhqTqzn8STNHfhUd1crTQMbzXLpjrOxDjlNcin8o6TQbcWbi/vc0=\n=3WdN\n-----END PGP SIGNATURE-----\n",
"payload": "tree 422c3250927604ecefa06f4a0b9e73156555f651\nparent d8570ec6eaa4133037e1f350c8e8ed570c8b1b71\nauthor Nicolas Gallagher <necolas@fb.com> 1578682654 -0800\ncommitter GitHub <noreply@github.com> 1578682654 -0800\n\nFix issue template for questions (#17817)\n\n"
}
},
"url": "https://api.github.com/repos/facebook/react/commits/64aae7b06fa47e126b0ba9c0ba9896caa803528e",
"html_url": "https://github.com/facebook/react/commit/64aae7b06fa47e126b0ba9c0ba9896caa803528e",
"comments_url": "https://api.github.com/repos/facebook/react/commits/64aae7b06fa47e126b0ba9c0ba9896caa803528e/comments",
"author": {
"login": "necolas",
"id": 239676,
"node_id": "MDQ6VXNlcjIzOTY3Ng==",
"avatar_url": "https://avatars2.githubusercontent.com/u/239676?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/necolas",
"html_url": "https://github.com/necolas",
"followers_url": "https://api.github.com/users/necolas/followers",
"following_url": "https://api.github.com/users/necolas/following{/other_user}",
"gists_url": "https://api.github.com/users/necolas/gists{/gist_id}",
"starred_url": "https://api.github.com/users/necolas/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/necolas/subscriptions",
"organizations_url": "https://api.github.com/users/necolas/orgs",
"repos_url": "https://api.github.com/users/necolas/repos",
"events_url": "https://api.github.com/users/necolas/events{/privacy}",
"received_events_url": "https://api.github.com/users/necolas/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "web-flow",
"id": 19864447,
"node_id": "MDQ6VXNlcjE5ODY0NDQ3",
"avatar_url": "https://avatars3.githubusercontent.com/u/19864447?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/web-flow",
"html_url": "https://github.com/web-flow",
"followers_url": "https://api.github.com/users/web-flow/followers",
"following_url": "https://api.github.com/users/web-flow/following{/other_user}",
"gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
"starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
"organizations_url": "https://api.github.com/users/web-flow/orgs",
"repos_url": "https://api.github.com/users/web-flow/repos",
"events_url": "https://api.github.com/users/web-flow/events{/privacy}",
"received_events_url": "https://api.github.com/users/web-flow/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "d8570ec6eaa4133037e1f350c8e8ed570c8b1b71",
"url": "https://api.github.com/repos/facebook/react/commits/d8570ec6eaa4133037e1f350c8e8ed570c8b1b71",
"html_url": "https://github.com/facebook/react/commit/d8570ec6eaa4133037e1f350c8e8ed570c8b1b71"
}
]
},
{
"sha": "d8570ec6eaa4133037e1f350c8e8ed570c8b1b71",
"node_id": "MDY6Q29tbWl0MTAyNzAyNTA6ZDg1NzBlYzZlYWE0MTMzMDM3ZTFmMzUwYzhlOGVkNTcwYzhiMWI3MQ==",
"commit": {
"author": {
"name": "Emily",
"email": "emily.janzer@gmail.com",
"date": "2020-01-10T18:21:32Z"
},
"committer": {
"name": "Brian Vaughn",
"email": "bvaughn@fb.com",
"date": "2020-01-10T18:21:32Z"
},
"message": "Create ReactFabric.stopSurface and use that for bridgeless mode binding (#16164)",
"tree": {
"sha": "60b8247c5c9b6ae52e24a019bfa7ebbed8e201f3",
"url": "https://api.github.com/repos/facebook/react/git/trees/60b8247c5c9b6ae52e24a019bfa7ebbed8e201f3"
},
"url": "https://api.github.com/repos/facebook/react/git/commits/d8570ec6eaa4133037e1f350c8e8ed570c8b1b71",
"comment_count": 0,
"verification": {
"verified": false,
"reason": "unsigned",
"signature": null,
"payload": null
}
},
"url": "https://api.github.com/repos/facebook/react/commits/d8570ec6eaa4133037e1f350c8e8ed570c8b1b71",
"html_url": "https://github.com/facebook/react/commit/d8570ec6eaa4133037e1f350c8e8ed570c8b1b71",
"comments_url": "https://api.github.com/repos/facebook/react/commits/d8570ec6eaa4133037e1f350c8e8ed570c8b1b71/comments",
"author": {
"login": "ejanzer",
"id": 2308395,
"node_id": "MDQ6VXNlcjIzMDgzOTU=",
"avatar_url": "https://avatars1.githubusercontent.com/u/2308395?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/ejanzer",
"html_url": "https://github.com/ejanzer",
"followers_url": "https://api.github.com/users/ejanzer/followers",
"following_url": "https://api.github.com/users/ejanzer/following{/other_user}",
"gists_url": "https://api.github.com/users/ejanzer/gists{/gist_id}",
"starred_url": "https://api.github.com/users/ejanzer/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/ejanzer/subscriptions",
"organizations_url": "https://api.github.com/users/ejanzer/orgs",
"repos_url": "https://api.github.com/users/ejanzer/repos",
"events_url": "https://api.github.com/users/ejanzer/events{/privacy}",
"received_events_url": "https://api.github.com/users/ejanzer/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "bvaughn",
"id": 29597,
"node_id": "MDQ6VXNlcjI5NTk3",
"avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/bvaughn",
"html_url": "https://github.com/bvaughn",
"followers_url": "https://api.github.com/users/bvaughn/followers",
"following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
"gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
"starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
"organizations_url": "https://api.github.com/users/bvaughn/orgs",
"repos_url": "https://api.github.com/users/bvaughn/repos",
"events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
"received_events_url": "https://api.github.com/users/bvaughn/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "05e487a12ffee59b75db82995f3f826254444741",
"url": "https://api.github.com/repos/facebook/react/commits/05e487a12ffee59b75db82995f3f826254444741",
"html_url": "https://github.com/facebook/react/commit/05e487a12ffee59b75db82995f3f826254444741"
}
]
},
{
"sha": "05e487a12ffee59b75db82995f3f826254444741",
"node_id": "MDY6Q29tbWl0MTAyNzAyNTA6MDVlNDg3YTEyZmZlZTU5Yjc1ZGI4Mjk5NWYzZjgyNjI1NDQ0NDc0MQ==",
"commit": {
"author": {
"name": "Nicolas Gallagher",
"email": "necolas@fb.com",
"date": "2020-01-10T00:16:37Z"
},
"committer": {
"name": "GitHub",
"email": "noreply@github.com",
"date": "2020-01-10T00:16:37Z"
},
"message": "Add GitHub issue templates (#17815)",
"tree": {
"sha": "d4ae71a5bb7dfaca058cde99b975781b354607e8",
"url": "https://api.github.com/repos/facebook/react/git/trees/d4ae71a5bb7dfaca058cde99b975781b354607e8"
},
"url": "https://api.github.com/repos/facebook/react/git/commits/05e487a12ffee59b75db82995f3f826254444741",
"comment_count": 0,
"verification": {
"verified": true,
"reason": "valid",
"signature": "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJeF8JlCRBK7hj4Ov3rIwAAdHIIAARppcHX+1QLMHNeyGqZcQC7\nVDq9wFZ0LwWIMT55KcDZyLavaHIyORhdjAGdBYcv0TDXdSZE8j2sHIRxlwpSBb+B\nEAgFE40i2MsVIaaoZB5XAUXy8GsDVl5HNK1EyhfLe+5GeaCAvkWmbmc8rESS0P/Q\nyqF79PRbrsO7Vsq1LFI4EEZ1fSoHcJau/U+J5Moshc3duDIZg50tnvPXLR7UYMoV\nHOPnZm68AamW9wfppuPnhHd1Rg+6Mddmun6BV6ZWcTFIa22RVbOPoPpveVmYhJj+\n0NzZtkGs2O3chkr1RPy7ogkZujP/CjHx4SdwZg2MTeYP0mq91EKdjZzJSw7+wZ4=\n=rJeB\n-----END PGP SIGNATURE-----\n",
"payload": "tree d4ae71a5bb7dfaca058cde99b975781b354607e8\nparent 5d6129b5d1eb53bdfec8c2b44ec3c9cc3a4a1770\nauthor Nicolas Gallagher <necolas@fb.com> 1578615397 -0800\ncommitter GitHub <noreply@github.com> 1578615397 -0800\n\nAdd GitHub issue templates (#17815)\n\n"
}
},
"url": "https://api.github.com/repos/facebook/react/commits/05e487a12ffee59b75db82995f3f826254444741",
"html_url": "https://github.com/facebook/react/commit/05e487a12ffee59b75db82995f3f826254444741",
"comments_url": "https://api.github.com/repos/facebook/react/commits/05e487a12ffee59b75db82995f3f826254444741/comments",
"author": {
"login": "necolas",
"id": 239676,
"node_id": "MDQ6VXNlcjIzOTY3Ng==",
"avatar_url": "https://avatars2.githubusercontent.com/u/239676?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/necolas",
"html_url": "https://github.com/necolas",
"followers_url": "https://api.github.com/users/necolas/followers",
"following_url": "https://api.github.com/users/necolas/following{/other_user}",
"gists_url": "https://api.github.com/users/necolas/gists{/gist_id}",
"starred_url": "https://api.github.com/users/necolas/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/necolas/subscriptions",
"organizations_url": "https://api.github.com/users/necolas/orgs",
"repos_url": "https://api.github.com/users/necolas/repos",
"events_url": "https://api.github.com/users/necolas/events{/privacy}",
"received_events_url": "https://api.github.com/users/necolas/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "web-flow",
"id": 19864447,
"node_id": "MDQ6VXNlcjE5ODY0NDQ3",
"avatar_url": "https://avatars3.githubusercontent.com/u/19864447?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/web-flow",
"html_url": "https://github.com/web-flow",
"followers_url": "https://api.github.com/users/web-flow/followers",
"following_url": "https://api.github.com/users/web-flow/following{/other_user}",
"gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
"starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
"organizations_url": "https://api.github.com/users/web-flow/orgs",
"repos_url": "https://api.github.com/users/web-flow/repos",
"events_url": "https://api.github.com/users/web-flow/events{/privacy}",
"received_events_url": "https://api.github.com/users/web-flow/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "5d6129b5d1eb53bdfec8c2b44ec3c9cc3a4a1770",
"url": "https://api.github.com/repos/facebook/react/commits/5d6129b5d1eb53bdfec8c2b44ec3c9cc3a4a1770",
"html_url": "https://github.com/facebook/react/commit/5d6129b5d1eb53bdfec8c2b44ec3c9cc3a4a1770"
}
]
},
{
"sha": "5d6129b5d1eb53bdfec8c2b44ec3c9cc3a4a1770",
"node_id": "MDY6Q29tbWl0MTAyNzAyNTA6NWQ2MTI5YjVkMWViNTNiZGZlYzhjMmI0NGVjM2M5Y2MzYTRhMTc3MA==",
"commit": {
"author": {
"name": "Ganapati V S",
"email": "ganapati.vs@tracxn.com",
"date": "2020-01-09T22:14:00Z"
},
"committer": {
"name": "Nicolas Gallagher",
"email": "necolas@fb.com",
"date": "2020-01-09T22:14:00Z"
},
"message": "Update ReactSuspenseList-test.internal.js (#17034)\n\nTypo",
"tree": {
"sha": "2a6d09358857f9b6cc222d9ef33ba0037f78462d",
"url": "https://api.github.com/repos/facebook/react/git/trees/2a6d09358857f9b6cc222d9ef33ba0037f78462d"
},
"url": "https://api.github.com/repos/facebook/react/git/commits/5d6129b5d1eb53bdfec8c2b44ec3c9cc3a4a1770",
"comment_count": 0,
"verification": {
"verified": false,
"reason": "unsigned",
"signature": null,
"payload": null
}
},
"url": "https://api.github.com/repos/facebook/react/commits/5d6129b5d1eb53bdfec8c2b44ec3c9cc3a4a1770",
"html_url": "https://github.com/facebook/react/commit/5d6129b5d1eb53bdfec8c2b44ec3c9cc3a4a1770",
"comments_url": "https://api.github.com/repos/facebook/react/commits/5d6129b5d1eb53bdfec8c2b44ec3c9cc3a4a1770/comments",
"author": {
"login": "ganapativs",
"id": 4010960,
"node_id": "MDQ6VXNlcjQwMTA5NjA=",
"avatar_url": "https://avatars0.githubusercontent.com/u/4010960?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/ganapativs",
"html_url": "https://github.com/ganapativs",
"followers_url": "https://api.github.com/users/ganapativs/followers",
"following_url": "https://api.github.com/users/ganapativs/following{/other_user}",
"gists_url": "https://api.github.com/users/ganapativs/gists{/gist_id}",
"starred_url": "https://api.github.com/users/ganapativs/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/ganapativs/subscriptions",
"organizations_url": "https://api.github.com/users/ganapativs/orgs",
"repos_url": "https://api.github.com/users/ganapativs/repos",
"events_url": "https://api.github.com/users/ganapativs/events{/privacy}",
"received_events_url": "https://api.github.com/users/ganapativs/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "necolas",
"id": 239676,
"node_id": "MDQ6VXNlcjIzOTY3Ng==",
"avatar_url": "https://avatars2.githubusercontent.com/u/239676?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/necolas",
"html_url": "https://github.com/necolas",
"followers_url": "https://api.github.com/users/necolas/followers",
"following_url": "https://api.github.com/users/necolas/following{/other_user}",
"gists_url": "https://api.github.com/users/necolas/gists{/gist_id}",
"starred_url": "https://api.github.com/users/necolas/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/necolas/subscriptions",
"organizations_url": "https://api.github.com/users/necolas/orgs",
"repos_url": "https://api.github.com/users/necolas/repos",
"events_url": "https://api.github.com/users/necolas/events{/privacy}",
"received_events_url": "https://api.github.com/users/necolas/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "ff900095b98621848caf6ed1483dce0e347d3aa4",
"url": "https://api.github.com/repos/facebook/react/commits/ff900095b98621848caf6ed1483dce0e347d3aa4",
"html_url": "https://github.com/facebook/react/commit/ff900095b98621848caf6ed1483dce0e347d3aa4"
}
]
},
{
"sha": "ff900095b98621848caf6ed1483dce0e347d3aa4",
"node_id": "MDY6Q29tbWl0MTAyNzAyNTA6ZmY5MDAwOTViOTg2MjE4NDhjYWY2ZWQxNDgzZGNlMGUzNDdkM2FhNA==",
"commit": {
"author": {
"name": "Dawid Loranc",
"email": "dawidloranc@gmail.com",
"date": "2020-01-09T22:13:03Z"
},
"committer": {
"name": "Nicolas Gallagher",
"email": "necolas@fb.com",
"date": "2020-01-09T22:13:03Z"
},
"message": "Fix message typo in printOperationsArray function (#17039)",
"tree": {
"sha": "d362325ada4c8e25369cbaf7b73b8cfa1802572b",
"url": "https://api.github.com/repos/facebook/react/git/trees/d362325ada4c8e25369cbaf7b73b8cfa1802572b"
},
"url": "https://api.github.com/repos/facebook/react/git/commits/ff900095b98621848caf6ed1483dce0e347d3aa4",
"comment_count": 0,
"verification": {
"verified": false,
"reason": "unsigned",
"signature": null,
"payload": null
}
},
"url": "https://api.github.com/repos/facebook/react/commits/ff900095b98621848caf6ed1483dce0e347d3aa4",
"html_url": "https://github.com/facebook/react/commit/ff900095b98621848caf6ed1483dce0e347d3aa4",
"comments_url": "https://api.github.com/repos/facebook/react/commits/ff900095b98621848caf6ed1483dce0e347d3aa4/comments",
"author": {
"login": "dloranc",
"id": 364417,
"node_id": "MDQ6VXNlcjM2NDQxNw==",
"avatar_url": "https://avatars2.githubusercontent.com/u/364417?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/dloranc",
"html_url": "https://github.com/dloranc",
"followers_url": "https://api.github.com/users/dloranc/followers",
"following_url": "https://api.github.com/users/dloranc/following{/other_user}",
"gists_url": "https://api.github.com/users/dloranc/gists{/gist_id}",
"starred_url": "https://api.github.com/users/dloranc/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/dloranc/subscriptions",
"organizations_url": "https://api.github.com/users/dloranc/orgs",
"repos_url": "https://api.github.com/users/dloranc/repos",
"events_url": "https://api.github.com/users/dloranc/events{/privacy}",
"received_events_url": "https://api.github.com/users/dloranc/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "necolas",
"id": 239676,
"node_id": "MDQ6VXNlcjIzOTY3Ng==",
"avatar_url": "https://avatars2.githubusercontent.com/u/239676?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/necolas",
"html_url": "https://github.com/necolas",
"followers_url": "https://api.github.com/users/necolas/followers",
"following_url": "https://api.github.com/users/necolas/following{/other_user}",
"gists_url": "https://api.github.com/users/necolas/gists{/gist_id}",
"starred_url": "https://api.github.com/users/necolas/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/necolas/subscriptions",
"organizations_url": "https://api.github.com/users/necolas/orgs",
"repos_url": "https://api.github.com/users/necolas/repos",
"events_url": "https://api.github.com/users/necolas/events{/privacy}",
"received_events_url": "https://api.github.com/users/necolas/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "1b6e269751c28030429503a60590114e252fc86c",
"url": "https://api.github.com/repos/facebook/react/commits/1b6e269751c28030429503a60590114e252fc86c",
"html_url": "https://github.com/facebook/react/commit/1b6e269751c28030429503a60590114e252fc86c"
}
]
},
{
"sha": "1b6e269751c28030429503a60590114e252fc86c",
"node_id": "MDY6Q29tbWl0MTAyNzAyNTA6MWI2ZTI2OTc1MWMyODAzMDQyOTUwM2E2MDU5MDExNGUyNTJmYzg2Yw==",
"commit": {
"author": {
"name": "Alican Çubukçuoğlu",
"email": "alicancubukcuoglu@gmail.com",
"date": "2020-01-09T22:07:41Z"
},
"committer": {
"name": "Nicolas Gallagher",
"email": "necolas@fb.com",
"date": "2020-01-09T22:07:41Z"
},
"message": "Create SECURITY.md (#15784)\n\nAdds SECURITY.md as mentioned in #15722.",
"tree": {
"sha": "8e00413b91835921418ea6d892e6c7ce10749975",
"url": "https://api.github.com/repos/facebook/react/git/trees/8e00413b91835921418ea6d892e6c7ce10749975"
},
"url": "https://api.github.com/repos/facebook/react/git/commits/1b6e269751c28030429503a60590114e252fc86c",
"comment_count": 0,
"verification": {
"verified": false,
"reason": "unsigned",
"signature": null,
"payload": null
}
},
"url": "https://api.github.com/repos/facebook/react/commits/1b6e269751c28030429503a60590114e252fc86c",
"html_url": "https://github.com/facebook/react/commit/1b6e269751c28030429503a60590114e252fc86c",
"comments_url": "https://api.github.com/repos/facebook/react/commits/1b6e269751c28030429503a60590114e252fc86c/comments",
"author": {
"login": "AlicanC",
"id": 412180,
"node_id": "MDQ6VXNlcjQxMjE4MA==",
"avatar_url": "https://avatars2.githubusercontent.com/u/412180?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/AlicanC",
"html_url": "https://github.com/AlicanC",
"followers_url": "https://api.github.com/users/AlicanC/followers",
"following_url": "https://api.github.com/users/AlicanC/following{/other_user}",
"gists_url": "https://api.github.com/users/AlicanC/gists{/gist_id}",
"starred_url": "https://api.github.com/users/AlicanC/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/AlicanC/subscriptions",
"organizations_url": "https://api.github.com/users/AlicanC/orgs",
"repos_url": "https://api.github.com/users/AlicanC/repos",
"events_url": "https://api.github.com/users/AlicanC/events{/privacy}",
"received_events_url": "https://api.github.com/users/AlicanC/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "necolas",
"id": 239676,
"node_id": "MDQ6VXNlcjIzOTY3Ng==",
"avatar_url": "https://avatars2.githubusercontent.com/u/239676?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/necolas",
"html_url": "https://github.com/necolas",
"followers_url": "https://api.github.com/users/necolas/followers",
"following_url": "https://api.github.com/users/necolas/following{/other_user}",
"gists_url": "https://api.github.com/users/necolas/gists{/gist_id}",
"starred_url": "https://api.github.com/users/necolas/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/necolas/subscriptions",
"organizations_url": "https://api.github.com/users/necolas/orgs",
"repos_url": "https://api.github.com/users/necolas/repos",
"events_url": "https://api.github.com/users/necolas/events{/privacy}",
"received_events_url": "https://api.github.com/users/necolas/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "3ac81a57fbb7bd272f62444820c0451e0b344408",
"url": "https://api.github.com/repos/facebook/react/commits/3ac81a57fbb7bd272f62444820c0451e0b344408",
"html_url": "https://github.com/facebook/react/commit/3ac81a57fbb7bd272f62444820c0451e0b344408"
}
]
},
{
"sha": "3ac81a57fbb7bd272f62444820c0451e0b344408",
"node_id": "MDY6Q29tbWl0MTAyNzAyNTA6M2FjODFhNTdmYmI3YmQyNzJmNjI0NDQ4MjBjMDQ1MWUwYjM0NDQwOA==",
"commit": {
"author": {
"name": "Tao",
"email": "t73liu@gmail.com",
"date": "2020-01-09T21:47:05Z"
},
"committer": {
"name": "Nicolas Gallagher",
"email": "necolas@fb.com",
"date": "2020-01-09T21:47:05Z"
},
"message": "Update create-react-app note for eslint-plugin-react-hooks (#16982)\n\neslint-plugin-react-hooks was added in react-scripts 3.0.0",
"tree": {
"sha": "4bd96dec4d6396dc81cb668b052cbcc8d7fe9329",
"url": "https://api.github.com/repos/facebook/react/git/trees/4bd96dec4d6396dc81cb668b052cbcc8d7fe9329"
},
"url": "https://api.github.com/repos/facebook/react/git/commits/3ac81a57fbb7bd272f62444820c0451e0b344408",
"comment_count": 0,
"verification": {
"verified": false,
"reason": "unsigned",
"signature": null,
"payload": null
}
},
"url": "https://api.github.com/repos/facebook/react/commits/3ac81a57fbb7bd272f62444820c0451e0b344408",
"html_url": "https://github.com/facebook/react/commit/3ac81a57fbb7bd272f62444820c0451e0b344408",
"comments_url": "https://api.github.com/repos/facebook/react/commits/3ac81a57fbb7bd272f62444820c0451e0b344408/comments",
"author": {
"login": "t73liu",
"id": 5432907,
"node_id": "MDQ6VXNlcjU0MzI5MDc=",
"avatar_url": "https://avatars0.githubusercontent.com/u/5432907?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/t73liu",
"html_url": "https://github.com/t73liu",
"followers_url": "https://api.github.com/users/t73liu/followers",
"following_url": "https://api.github.com/users/t73liu/following{/other_user}",
"gists_url": "https://api.github.com/users/t73liu/gists{/gist_id}",
"starred_url": "https://api.github.com/users/t73liu/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/t73liu/subscriptions",
"organizations_url": "https://api.github.com/users/t73liu/orgs",
"repos_url": "https://api.github.com/users/t73liu/repos",
"events_url": "https://api.github.com/users/t73liu/events{/privacy}",
"received_events_url": "https://api.github.com/users/t73liu/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "necolas",
"id": 239676,
"node_id": "MDQ6VXNlcjIzOTY3Ng==",
"avatar_url": "https://avatars2.githubusercontent.com/u/239676?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/necolas",
"html_url": "https://github.com/necolas",
"followers_url": "https://api.github.com/users/necolas/followers",
"following_url": "https://api.github.com/users/necolas/following{/other_user}",
"gists_url": "https://api.github.com/users/necolas/gists{/gist_id}",
"starred_url": "https://api.github.com/users/necolas/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/necolas/subscriptions",
"organizations_url": "https://api.github.com/users/necolas/orgs",
"repos_url": "https://api.github.com/users/necolas/repos",
"events_url": "https://api.github.com/users/necolas/events{/privacy}",
"received_events_url": "https://api.github.com/users/necolas/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "435259f189526fa32b8c9cdab7d7b2c1dc260bc8",
"url": "https://api.github.com/repos/facebook/react/commits/435259f189526fa32b8c9cdab7d7b2c1dc260bc8",
"html_url": "https://github.com/facebook/react/commit/435259f189526fa32b8c9cdab7d7b2c1dc260bc8"
}
]
},
{
"sha": "435259f189526fa32b8c9cdab7d7b2c1dc260bc8",
"node_id": "MDY6Q29tbWl0MTAyNzAyNTA6NDM1MjU5ZjE4OTUyNmZhMzJiOGM5Y2RhYjdkN2IyYzFkYzI2MGJjOA==",
"commit": {
"author": {
"name": "Brian Vaughn",
"email": "bvaughn@fb.com",
"date": "2020-01-09T21:15:19Z"
},
"committer": {
"name": "GitHub",
"email": "noreply@github.com",
"date": "2020-01-09T21:15:19Z"
},
"message": "Add better test coverage for hooks in DevTools Profiler's change-detection (#17816)",
"tree": {
"sha": "218d7a4872d96f7a1e7e7c6fc82bf3177f8c1ae2",
"url": "https://api.github.com/repos/facebook/react/git/trees/218d7a4872d96f7a1e7e7c6fc82bf3177f8c1ae2"
},
"url": "https://api.github.com/repos/facebook/react/git/commits/435259f189526fa32b8c9cdab7d7b2c1dc260bc8",
"comment_count": 0,
"verification": {
"verified": true,
"reason": "valid",
"signature": "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJeF5fnCRBK7hj4Ov3rIwAAdHIIAAlMX0Y2gjsvb/L1HCK8V2gs\n0nni2BG+BmFx071YQaU0WE9w7szgxArCKL5I3Q8jATLuAYeHA8KoNefIcwuznfuU\nL7+R6LaVYnLOSdvwM0PeHH2XQ5wv1uEedj2oPBtCa1yc7ZPklMPqwCma+QYfSUy7\nRlWzwaFVofcG0p7bogXxnDOvfNRVblhI08caV94oAYoZ5lPex72Jav+3JnLtQd0T\npgjkwG54U1fzUG+2M4nx3xpeJmP5R6hbqTMMz43vuKL3MRb2Llj/Pp3QvEjNMogn\n0PABi/YNWIumYfaNoQwwLWCJReFxeK7GitbbnJnHQu0qSn1KKMmD4SKhpeguNxg=\n=TD2R\n-----END PGP SIGNATURE-----\n",
"payload": "tree 218d7a4872d96f7a1e7e7c6fc82bf3177f8c1ae2\nparent 2e4948a34d4504eb852f7473d3c0315037f75d22\nauthor Brian Vaughn <bvaughn@fb.com> 1578604519 -0800\ncommitter GitHub <noreply@github.com> 1578604519 -0800\n\nAdd better test coverage for hooks in DevTools Profiler's change-detection (#17816)\n\n"
}
},
"url": "https://api.github.com/repos/facebook/react/commits/435259f189526fa32b8c9cdab7d7b2c1dc260bc8",
"html_url": "https://github.com/facebook/react/commit/435259f189526fa32b8c9cdab7d7b2c1dc260bc8",
"comments_url": "https://api.github.com/repos/facebook/react/commits/435259f189526fa32b8c9cdab7d7b2c1dc260bc8/comments",
"author": {
"login": "bvaughn",
"id": 29597,
"node_id": "MDQ6VXNlcjI5NTk3",
"avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/bvaughn",
"html_url": "https://github.com/bvaughn",
"followers_url": "https://api.github.com/users/bvaughn/followers",
"following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
"gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
"starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
"organizations_url": "https://api.github.com/users/bvaughn/orgs",
"repos_url": "https://api.github.com/users/bvaughn/repos",
"events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
"received_events_url": "https://api.github.com/users/bvaughn/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "web-flow",
"id": 19864447,
"node_id": "MDQ6VXNlcjE5ODY0NDQ3",
"avatar_url": "https://avatars3.githubusercontent.com/u/19864447?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/web-flow",
"html_url": "https://github.com/web-flow",
"followers_url": "https://api.github.com/users/web-flow/followers",
"following_url": "https://api.github.com/users/web-flow/following{/other_user}",
"gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
"starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
"organizations_url": "https://api.github.com/users/web-flow/orgs",
"repos_url": "https://api.github.com/users/web-flow/repos",
"events_url": "https://api.github.com/users/web-flow/events{/privacy}",
"received_events_url": "https://api.github.com/users/web-flow/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "2e4948a34d4504eb852f7473d3c0315037f75d22",
"url": "https://api.github.com/repos/facebook/react/commits/2e4948a34d4504eb852f7473d3c0315037f75d22",
"html_url": "https://github.com/facebook/react/commit/2e4948a34d4504eb852f7473d3c0315037f75d22"
}
]
},
{
"sha": "2e4948a34d4504eb852f7473d3c0315037f75d22",
"node_id": "MDY6Q29tbWl0MTAyNzAyNTA6MmU0OTQ4YTM0ZDQ1MDRlYjg1MmY3NDczZDNjMDMxNTAzN2Y3NWQyMg==",
"commit": {
"author": {
"name": "Nicolas Gallagher",
"email": "necolas@fb.com",
"date": "2020-01-09T19:13:41Z"
},
"committer": {
"name": "GitHub",
"email": "noreply@github.com",
"date": "2020-01-09T19:13:41Z"
},
"message": "Add configuration for the \"Stale\" GitHub App (#17806)\n\nConfiguration for the bot that marks and closes stale issues and pull requests.\r\nhttps://probot.github.io/apps/stale/",
"tree": {
"sha": "e138da5fafc392178465b1c9fc1dd9a04bf6d2c6",
"url": "https://api.github.com/repos/facebook/react/git/trees/e138da5fafc392178465b1c9fc1dd9a04bf6d2c6"
},
"url": "https://api.github.com/repos/facebook/react/git/commits/2e4948a34d4504eb852f7473d3c0315037f75d22",
"comment_count": 0,
"verification": {
"verified": true,
"reason": "valid",
"signature": "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJeF3tlCRBK7hj4Ov3rIwAAdHIIAGZny7lwWg4PjMoPLWMo0Xsu\npi7qIYfPNCU2nk9rRJPBeJU7tx7lDy7SfnXqmtFAnBS2MutotPlkwA1grOfoJNLY\nlHCJvkmuaZUbC+Iiycyk5pyUEITlKaKLvHR8nee4/s4XUpdMfW45CAbuQLZZToFj\nXOV2Yn3KiDClm6mhYdBGR2WJpGN+CR08nLD9U1Ovbj8Sy6t4CxrSxSx/jP030yrH\n7OXQmQyk09TSkgJu9IOpkqGZjGWJRzU7xkSHnFILgJ+OAmQ+A/p1ZWGr9Y9RHDXJ\nEYHvZy7WHpQ18pE805vCPYsyhjsIC/sfMzZXHsAGNX9kgux/D3A3vgD4sYQ9ANc=\n=AVYG\n-----END PGP SIGNATURE-----\n",
"payload": "tree e138da5fafc392178465b1c9fc1dd9a04bf6d2c6\nparent e706721490e50d0bd6af2cd933dbf857fd8b61ed\nauthor Nicolas Gallagher <necolas@fb.com> 1578597221 -0800\ncommitter GitHub <noreply@github.com> 1578597221 -0800\n\nAdd configuration for the \"Stale\" GitHub App (#17806)\n\nConfiguration for the bot that marks and closes stale issues and pull requests.\r\nhttps://probot.github.io/apps/stale/"
}
},
"url": "https://api.github.com/repos/facebook/react/commits/2e4948a34d4504eb852f7473d3c0315037f75d22",
"html_url": "https://github.com/facebook/react/commit/2e4948a34d4504eb852f7473d3c0315037f75d22",
"comments_url": "https://api.github.com/repos/facebook/react/commits/2e4948a34d4504eb852f7473d3c0315037f75d22/comments",
"author": {
"login": "necolas",
"id": 239676,
"node_id": "MDQ6VXNlcjIzOTY3Ng==",
"avatar_url": "https://avatars2.githubusercontent.com/u/239676?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/necolas",
"html_url": "https://github.com/necolas",
"followers_url": "https://api.github.com/users/necolas/followers",
"following_url": "https://api.github.com/users/necolas/following{/other_user}",
"gists_url": "https://api.github.com/users/necolas/gists{/gist_id}",
"starred_url": "https://api.github.com/users/necolas/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/necolas/subscriptions",
"organizations_url": "https://api.github.com/users/necolas/orgs",
"repos_url": "https://api.github.com/users/necolas/repos",
"events_url": "https://api.github.com/users/necolas/events{/privacy}",
"received_events_url": "https://api.github.com/users/necolas/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "web-flow",
"id": 19864447,
"node_id": "MDQ6VXNlcjE5ODY0NDQ3",
"avatar_url": "https://avatars3.githubusercontent.com/u/19864447?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/web-flow",
"html_url": "https://github.com/web-flow",
"followers_url": "https://api.github.com/users/web-flow/followers",
"following_url": "https://api.github.com/users/web-flow/following{/other_user}",
"gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
"starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
"organizations_url": "https://api.github.com/users/web-flow/orgs",
"repos_url": "https://api.github.com/users/web-flow/repos",
"events_url": "https://api.github.com/users/web-flow/events{/privacy}",
"received_events_url": "https://api.github.com/users/web-flow/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "e706721490e50d0bd6af2cd933dbf857fd8b61ed",
"url": "https://api.github.com/repos/facebook/react/commits/e706721490e50d0bd6af2cd933dbf857fd8b61ed",
"html_url": "https://github.com/facebook/react/commit/e706721490e50d0bd6af2cd933dbf857fd8b61ed"
}
]
},
{
"sha": "e706721490e50d0bd6af2cd933dbf857fd8b61ed",
"node_id": "MDY6Q29tbWl0MTAyNzAyNTA6ZTcwNjcyMTQ5MGU1MGQwYmQ2YWYyY2Q5MzNkYmY4NTdmZDhiNjFlZA==",
"commit": {
"author": {
"name": "Dan Abramov",
"email": "dan.abramov@gmail.com",
"date": "2020-01-09T14:50:44Z"
},
"committer": {
"name": "GitHub",
"email": "noreply@github.com",
"date": "2020-01-09T14:50:44Z"
},
"message": "Update Flow to 0.84 (#17805)\n\n* Update Flow to 0.84\r\n\r\n* Fix violations\r\n\r\n* Use inexact object syntax in files from fbsource\r\n\r\n* Fix warning extraction to use a modern parser\r\n\r\n* Codemod inexact objects to new syntax\r\n\r\n* Tighten types that can be exact\r\n\r\n* Revert unintentional formatting changes from codemod",
"tree": {
"sha": "3b9cecceba40d3a12c817bdc01ce0780ea73cb9f",
"url": "https://api.github.com/repos/facebook/react/git/trees/3b9cecceba40d3a12c817bdc01ce0780ea73cb9f"
},
"url": "https://api.github.com/repos/facebook/react/git/commits/e706721490e50d0bd6af2cd933dbf857fd8b61ed",
"comment_count": 0,
"verification": {
"verified": true,
"reason": "valid",
"signature": "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJeFz3ECRBK7hj4Ov3rIwAAdHIIAJhSbfkMvEzYhIoF6RdSgcSt\nPmPxnmb1kfgfxnms/sZyDREfYedR2PU1ahfKahTV0kW2aa0gQKg73l016QKh1oQZ\nRdxJSUTQGXIlh0Ideknt8LPqfxl4npyujdG+uhFuzNVQuYdeDXLd6oHMkRYQqf3E\nT9FAQVISON+2DOW1YE9FCHGKa5FdzbXng6rAWdxVLlKaKCX7oavb5Qzw1maqBBMs\nZECUIiKfApMNP5JYt6qkF7mQj/Ys/5vTFXtcDn3ExsqRgixLkxzTMdzs8yZFWGAU\n6AE5mjTihPi0EzRdl8qkAAAOvOBekwJ2GGbzXE/szlxSetYsOGTS7Al8NPHCCdA=\n=ML/V\n-----END PGP SIGNATURE-----\n",
"payload": "tree 3b9cecceba40d3a12c817bdc01ce0780ea73cb9f\nparent b979db4e7215957f03c4221622f0b115a868439a\nauthor Dan Abramov <dan.abramov@gmail.com> 1578581444 +0000\ncommitter GitHub <noreply@github.com> 1578581444 +0000\n\nUpdate Flow to 0.84 (#17805)\n\n* Update Flow to 0.84\r\n\r\n* Fix violations\r\n\r\n* Use inexact object syntax in files from fbsource\r\n\r\n* Fix warning extraction to use a modern parser\r\n\r\n* Codemod inexact objects to new syntax\r\n\r\n* Tighten types that can be exact\r\n\r\n* Revert unintentional formatting changes from codemod\r\n"
}
},
"url": "https://api.github.com/repos/facebook/react/commits/e706721490e50d0bd6af2cd933dbf857fd8b61ed",
"html_url": "https://github.com/facebook/react/commit/e706721490e50d0bd6af2cd933dbf857fd8b61ed",
"comments_url": "https://api.github.com/repos/facebook/react/commits/e706721490e50d0bd6af2cd933dbf857fd8b61ed/comments",
"author": {
"login": "gaearon",
"id": 810438,
"node_id": "MDQ6VXNlcjgxMDQzOA==",
"avatar_url": "https://avatars0.githubusercontent.com/u/810438?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/gaearon",
"html_url": "https://github.com/gaearon",
"followers_url": "https://api.github.com/users/gaearon/followers",
"following_url": "https://api.github.com/users/gaearon/following{/other_user}",
"gists_url": "https://api.github.com/users/gaearon/gists{/gist_id}",
"starred_url": "https://api.github.com/users/gaearon/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/gaearon/subscriptions",
"organizations_url": "https://api.github.com/users/gaearon/orgs",
"repos_url": "https://api.github.com/users/gaearon/repos",
"events_url": "https://api.github.com/users/gaearon/events{/privacy}",
"received_events_url": "https://api.github.com/users/gaearon/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "web-flow",
"id": 19864447,
"node_id": "MDQ6VXNlcjE5ODY0NDQ3",
"avatar_url": "https://avatars3.githubusercontent.com/u/19864447?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/web-flow",
"html_url": "https://github.com/web-flow",
"followers_url": "https://api.github.com/users/web-flow/followers",
"following_url": "https://api.github.com/users/web-flow/following{/other_user}",
"gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
"starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
"organizations_url": "https://api.github.com/users/web-flow/orgs",
"repos_url": "https://api.github.com/users/web-flow/repos",
"events_url": "https://api.github.com/users/web-flow/events{/privacy}",
"received_events_url": "https://api.github.com/users/web-flow/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "b979db4e7215957f03c4221622f0b115a868439a",
"url": "https://api.github.com/repos/facebook/react/commits/b979db4e7215957f03c4221622f0b115a868439a",
"html_url": "https://github.com/facebook/react/commit/b979db4e7215957f03c4221622f0b115a868439a"
}
]
},
{
"sha": "b979db4e7215957f03c4221622f0b115a868439a",
"node_id": "MDY6Q29tbWl0MTAyNzAyNTA6Yjk3OWRiNGU3MjE1OTU3ZjAzYzQyMjE2MjJmMGIxMTVhODY4NDM5YQ==",
"commit": {
"author": {
"name": "Dan Abramov",
"email": "dan.abramov@gmail.com",
"date": "2020-01-09T13:54:11Z"
},
"committer": {
"name": "GitHub",
"email": "noreply@github.com",
"date": "2020-01-09T13:54:11Z"
},
"message": "Bump Prettier (#17811)\n\n* Bump Prettier\r\n\r\n* Reformat\r\n\r\n* Use non-deprecated option",
"tree": {
"sha": "04e1cb178694c1db17399c9bd631c774a7be8f2b",
"url": "https://api.github.com/repos/facebook/react/git/trees/04e1cb178694c1db17399c9bd631c774a7be8f2b"
},
"url": "https://api.github.com/repos/facebook/react/git/commits/b979db4e7215957f03c4221622f0b115a868439a",
"comment_count": 0,
"verification": {
"verified": true,
"reason": "valid",
"signature": "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJeFzCDCRBK7hj4Ov3rIwAAdHIIAAFG3HwTeS14jH1Y4F6/gvMX\nIkYGQENAc2hj996YZx0tCpWzgHRFHlH7RJF7+emY/2415Se6vtUcA5lGAk5zn1a0\ndQvB5IlTPwbtPG+n9mYrFDwiqTuKM2Zmkv9Dzapd+DpM1UirsfwymewMZFxPp0nZ\nLWUN1/jCndMmsnlKfNBtfBfcndVN81xy7uaDWDyzlpbviO75IiD/TH3y0ZJS6Qhv\naP4PhNeZirI07++qLOzUoSZuuAu6QzoU3cXHogMRiVVDYrVuJHsljkgVA3tufA3b\nD/qAbVsvolMgdfACUg1uXds4hMGVHAytDUFrsKarXQboGDmxC6Hqmx5ls7f7jmM=\n=OmAY\n-----END PGP SIGNATURE-----\n",
"payload": "tree 04e1cb178694c1db17399c9bd631c774a7be8f2b\nparent 18875b240131273c8e3dd213341edc159150d80e\nauthor Dan Abramov <dan.abramov@gmail.com> 1578578051 +0000\ncommitter GitHub <noreply@github.com> 1578578051 +0000\n\nBump Prettier (#17811)\n\n* Bump Prettier\r\n\r\n* Reformat\r\n\r\n* Use non-deprecated option\r\n"
}
},
"url": "https://api.github.com/repos/facebook/react/commits/b979db4e7215957f03c4221622f0b115a868439a",
"html_url": "https://github.com/facebook/react/commit/b979db4e7215957f03c4221622f0b115a868439a",
"comments_url": "https://api.github.com/repos/facebook/react/commits/b979db4e7215957f03c4221622f0b115a868439a/comments",
"author": {
"login": "gaearon",
"id": 810438,
"node_id": "MDQ6VXNlcjgxMDQzOA==",
"avatar_url": "https://avatars0.githubusercontent.com/u/810438?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/gaearon",
"html_url": "https://github.com/gaearon",
"followers_url": "https://api.github.com/users/gaearon/followers",
"following_url": "https://api.github.com/users/gaearon/following{/other_user}",
"gists_url": "https://api.github.com/users/gaearon/gists{/gist_id}",
"starred_url": "https://api.github.com/users/gaearon/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/gaearon/subscriptions",
"organizations_url": "https://api.github.com/users/gaearon/orgs",
"repos_url": "https://api.github.com/users/gaearon/repos",
"events_url": "https://api.github.com/users/gaearon/events{/privacy}",
"received_events_url": "https://api.github.com/users/gaearon/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "web-flow",
"id": 19864447,
"node_id": "MDQ6VXNlcjE5ODY0NDQ3",
"avatar_url": "https://avatars3.githubusercontent.com/u/19864447?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/web-flow",
"html_url": "https://github.com/web-flow",
"followers_url": "https://api.github.com/users/web-flow/followers",
"following_url": "https://api.github.com/users/web-flow/following{/other_user}",
"gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
"starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
"organizations_url": "https://api.github.com/users/web-flow/orgs",
"repos_url": "https://api.github.com/users/web-flow/repos",
"events_url": "https://api.github.com/users/web-flow/events{/privacy}",
"received_events_url": "https://api.github.com/users/web-flow/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "18875b240131273c8e3dd213341edc159150d80e",
"url": "https://api.github.com/repos/facebook/react/commits/18875b240131273c8e3dd213341edc159150d80e",
"html_url": "https://github.com/facebook/react/commit/18875b240131273c8e3dd213341edc159150d80e"
}
]
},
{
"sha": "18875b240131273c8e3dd213341edc159150d80e",
"node_id": "MDY6Q29tbWl0MTAyNzAyNTA6MTg4NzViMjQwMTMxMjczYzhlM2RkMjEzMzQxZWRjMTU5MTUwZDgwZQ==",
"commit": {
"author": {
"name": "Sebastian Markbåge",
"email": "sema@fb.com",
"date": "2020-01-08T22:40:07Z"
},
"committer": {
"name": "GitHub",
"email": "noreply@github.com",
"date": "2020-01-08T22:40:07Z"
},
"message": "Remove special casing of toString values when enableTrustedTypesIntegration (#17774)\n\n* Remove toString of dangerouslySetInnerHTML\r\n\r\nAs far as I can tell, the toString call was added here:\r\n\r\nhttps://github.com/facebook/react/commit/caae627cd557812d28d11237b34bff6c661ea8bc#diff-5574f655d491348f422bca600ff6711dR887\r\n\r\nIt was never really needed. Subsequently when we added Trusted Types,\r\nthis needed to be changed to a special call but we really should just\r\nalways let it pass through.\r\n\r\n* Remove special casing of toString values when enableTrustedTypesIntegration\r\n\r\nAs far as I can tell, we only toString in user space because of IE8/9.\r\n\r\nWe don't really support IE8/9 anymore and by the time this flag is on,\r\nwe should be able to deprecate it.\r\n\r\nUnless this is also an issue in IE11. I haven't tested yet.",
"tree": {
"sha": "22da912c3e6fcbd95059d0eaedf7ec151ddc2857",
"url": "https://api.github.com/repos/facebook/react/git/trees/22da912c3e6fcbd95059d0eaedf7ec151ddc2857"
},
"url": "https://api.github.com/repos/facebook/react/git/commits/18875b240131273c8e3dd213341edc159150d80e",
"comment_count": 0,
"verification": {
"verified": true,
"reason": "valid",
"signature": "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJeFlpHCRBK7hj4Ov3rIwAAdHIIAA78d7ftn7O5Tm17wlKPf8Bx\nbSEokWzSbtSj4F00woZaqtiC0Qz9gXrPUTA4KKYXQfrJacAXVJjdGsDaEEKjX1yn\nQbDTVoiz9xGP2HbwMktNDuBaYVYePvB2BSKktI1Su/pdW8kZRWzYQt+5qreeK2Vd\n5ot3spbSg2hqXNf0XRoO+PtgHQ5HGiS8xiq0M+NXEORD2FyD3iGad4IkRMLHHBcE\nEyerwSbUYUdBtbe0+vV3xaXnw623o7GyEoQiUIbH5d2hhJ+npf0rk97swhYjH48H\nnhTgYN6+YhBWtwWgzSM2cNyirTLTJ1kwL1II4I2OFELWk7NrBNTUq7fRtcpf1w8=\n=yVAD\n-----END PGP SIGNATURE-----\n",
"payload": "tree 22da912c3e6fcbd95059d0eaedf7ec151ddc2857\nparent 19f6fe170ce920d7183a5620f4e218334c8bac62\nauthor Sebastian Markbåge <sema@fb.com> 1578523207 -0800\ncommitter GitHub <noreply@github.com> 1578523207 -0800\n\nRemove special casing of toString values when enableTrustedTypesIntegration (#17774)\n\n* Remove toString of dangerouslySetInnerHTML\r\n\r\nAs far as I can tell, the toString call was added here:\r\n\r\nhttps://github.com/facebook/react/commit/caae627cd557812d28d11237b34bff6c661ea8bc#diff-5574f655d491348f422bca600ff6711dR887\r\n\r\nIt was never really needed. Subsequently when we added Trusted Types,\r\nthis needed to be changed to a special call but we really should just\r\nalways let it pass through.\r\n\r\n* Remove special casing of toString values when enableTrustedTypesIntegration\r\n\r\nAs far as I can tell, we only toString in user space because of IE8/9.\r\n\r\nWe don't really support IE8/9 anymore and by the time this flag is on,\r\nwe should be able to deprecate it.\r\n\r\nUnless this is also an issue in IE11. I haven't tested yet.\r\n"
}
},
"url": "https://api.github.com/repos/facebook/react/commits/18875b240131273c8e3dd213341edc159150d80e",
"html_url": "https://github.com/facebook/react/commit/18875b240131273c8e3dd213341edc159150d80e",
"comments_url": "https://api.github.com/repos/facebook/react/commits/18875b240131273c8e3dd213341edc159150d80e/comments",
"author": {
"login": "sebmarkbage",
"id": 63648,
"node_id": "MDQ6VXNlcjYzNjQ4",
"avatar_url": "https://avatars2.githubusercontent.com/u/63648?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/sebmarkbage",
"html_url": "https://github.com/sebmarkbage",
"followers_url": "https://api.github.com/users/sebmarkbage/followers",
"following_url": "https://api.github.com/users/sebmarkbage/following{/other_user}",
"gists_url": "https://api.github.com/users/sebmarkbage/gists{/gist_id}",
"starred_url": "https://api.github.com/users/sebmarkbage/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/sebmarkbage/subscriptions",
"organizations_url": "https://api.github.com/users/sebmarkbage/orgs",
"repos_url": "https://api.github.com/users/sebmarkbage/repos",
"events_url": "https://api.github.com/users/sebmarkbage/events{/privacy}",
"received_events_url": "https://api.github.com/users/sebmarkbage/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "web-flow",
"id": 19864447,
"node_id": "MDQ6VXNlcjE5ODY0NDQ3",
"avatar_url": "https://avatars3.githubusercontent.com/u/19864447?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/web-flow",
"html_url": "https://github.com/web-flow",
"followers_url": "https://api.github.com/users/web-flow/followers",
"following_url": "https://api.github.com/users/web-flow/following{/other_user}",
"gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
"starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
"organizations_url": "https://api.github.com/users/web-flow/orgs",
"repos_url": "https://api.github.com/users/web-flow/repos",
"events_url": "https://api.github.com/users/web-flow/events{/privacy}",
"received_events_url": "https://api.github.com/users/web-flow/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "19f6fe170ce920d7183a5620f4e218334c8bac62",
"url": "https://api.github.com/repos/facebook/react/commits/19f6fe170ce920d7183a5620f4e218334c8bac62",
"html_url": "https://github.com/facebook/react/commit/19f6fe170ce920d7183a5620f4e218334c8bac62"
}
]
},
{
"sha": "19f6fe170ce920d7183a5620f4e218334c8bac62",
"node_id": "MDY6Q29tbWl0MTAyNzAyNTA6MTlmNmZlMTcwY2U5MjBkNzE4M2E1NjIwZjRlMjE4MzM0YzhiYWM2Mg==",
"commit": {
"author": {
"name": "Eli White",
"email": "github@eli-white.com",
"date": "2020-01-08T00:47:19Z"
},
"committer": {
"name": "GitHub",
"email": "noreply@github.com",
"date": "2020-01-08T00:47:19Z"
},
"message": "Revert \"Revert \"Dispatch commands to both UIManagers from both renderers (#17211)\" (#17232)\" (#17799)\n\n* Revert \"Revert \"Dispatch commands to both UIManagers from both renderers (#17211)\" (#17232)\"\r\n\r\nThis reverts commit d0fc0ba0a688950b8ab24a89f14888a19efa2444.\r\n\r\n* Clean up another __DEV__ warning check",
"tree": {
"sha": "221972fb8ba618678fb7a6040e2ad96143c4dde0",
"url": "https://api.github.com/repos/facebook/react/git/trees/221972fb8ba618678fb7a6040e2ad96143c4dde0"
},
"url": "https://api.github.com/repos/facebook/react/git/commits/19f6fe170ce920d7183a5620f4e218334c8bac62",
"comment_count": 0,
"verification": {
"verified": true,
"reason": "valid",
"signature": "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJeFSaXCRBK7hj4Ov3rIwAAdHIIAFiY39d3krZGDpui22ngaj/S\nPWlwO9SZv/QI0k2JkjQ6ap5pGvb0QG5zB3U6rCrw3N2FYg4yI8od5fi+6lQvUPFH\nkM2MDBChMp7yyqjec3LEhDLyALQ8HTsTJVszRHQ+ZtYLx/dMIX3RD9JiO57o6tfY\nCjVA/9Di4gJ61QJvsfsZ+Z/3wEIT+TVV6HPHmynJbLlSqvEsWOS3en4cY/Sm27nO\n5h1QL6Ia6CZKKWjnr2S415TDreN2sTlcrA8EvbVZEtxRBIG6EstXrxuTkPrEeIi8\nNlKzHl6EAMFJPA05Zgo5J3hUZNPang1mDMJtzjCjuWKj/9zUiu8xD6P3+SPQc7o=\n=Rbpi\n-----END PGP SIGNATURE-----\n",
"payload": "tree 221972fb8ba618678fb7a6040e2ad96143c4dde0\nparent 6250462bed19c9f18a8cf3c2b5fcaf9aba1df72b\nauthor Eli White <github@eli-white.com> 1578444439 -0800\ncommitter GitHub <noreply@github.com> 1578444439 -0800\n\nRevert \"Revert \"Dispatch commands to both UIManagers from both renderers (#17211)\" (#17232)\" (#17799)\n\n* Revert \"Revert \"Dispatch commands to both UIManagers from both renderers (#17211)\" (#17232)\"\r\n\r\nThis reverts commit d0fc0ba0a688950b8ab24a89f14888a19efa2444.\r\n\r\n* Clean up another __DEV__ warning check\r\n"
}
},
"url": "https://api.github.com/repos/facebook/react/commits/19f6fe170ce920d7183a5620f4e218334c8bac62",
"html_url": "https://github.com/facebook/react/commit/19f6fe170ce920d7183a5620f4e218334c8bac62",
"comments_url": "https://api.github.com/repos/facebook/react/commits/19f6fe170ce920d7183a5620f4e218334c8bac62/comments",
"author": {
"login": "TheSavior",
"id": 249164,
"node_id": "MDQ6VXNlcjI0OTE2NA==",
"avatar_url": "https://avatars0.githubusercontent.com/u/249164?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/TheSavior",
"html_url": "https://github.com/TheSavior",
"followers_url": "https://api.github.com/users/TheSavior/followers",
"following_url": "https://api.github.com/users/TheSavior/following{/other_user}",
"gists_url": "https://api.github.com/users/TheSavior/gists{/gist_id}",
"starred_url": "https://api.github.com/users/TheSavior/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/TheSavior/subscriptions",
"organizations_url": "https://api.github.com/users/TheSavior/orgs",
"repos_url": "https://api.github.com/users/TheSavior/repos",
"events_url": "https://api.github.com/users/TheSavior/events{/privacy}",
"received_events_url": "https://api.github.com/users/TheSavior/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "web-flow",
"id": 19864447,
"node_id": "MDQ6VXNlcjE5ODY0NDQ3",
"avatar_url": "https://avatars3.githubusercontent.com/u/19864447?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/web-flow",
"html_url": "https://github.com/web-flow",
"followers_url": "https://api.github.com/users/web-flow/followers",
"following_url": "https://api.github.com/users/web-flow/following{/other_user}",
"gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
"starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
"organizations_url": "https://api.github.com/users/web-flow/orgs",
"repos_url": "https://api.github.com/users/web-flow/repos",
"events_url": "https://api.github.com/users/web-flow/events{/privacy}",
"received_events_url": "https://api.github.com/users/web-flow/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "6250462bed19c9f18a8cf3c2b5fcaf9aba1df72b",
"url": "https://api.github.com/repos/facebook/react/commits/6250462bed19c9f18a8cf3c2b5fcaf9aba1df72b",
"html_url": "https://github.com/facebook/react/commit/6250462bed19c9f18a8cf3c2b5fcaf9aba1df72b"
}
]
},
{
"sha": "6250462bed19c9f18a8cf3c2b5fcaf9aba1df72b",
"node_id": "MDY6Q29tbWl0MTAyNzAyNTA6NjI1MDQ2MmJlZDE5YzlmMThhOGNmM2MyYjVmY2FmOWFiYTFkZjcyYg==",
"commit": {
"author": {
"name": "Brian Vaughn",
"email": "bvaughn@fb.com",
"date": "2020-01-07T21:05:36Z"
},
"committer": {
"name": "GitHub",
"email": "noreply@github.com",
"date": "2020-01-07T21:05:36Z"
},
"message": "Renamed \"ReactDOM-fb\" imports to \"ReactDOM\" in www shims (#17797)\n\n* Renamed \"ReactDOM-fb\" imports to \"ReactDOM\" in www shims\r\n\r\n* Removed ReactDOMComponentTree_DO_NOT_USE.js",
"tree": {
"sha": "b064083a26cf3848a4a772a26247a3891a9d6a2c",
"url": "https://api.github.com/repos/facebook/react/git/trees/b064083a26cf3848a4a772a26247a3891a9d6a2c"
},
"url": "https://api.github.com/repos/facebook/react/git/commits/6250462bed19c9f18a8cf3c2b5fcaf9aba1df72b",
"comment_count": 0,
"verification": {
"verified": true,
"reason": "valid",
"signature": "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJeFPKgCRBK7hj4Ov3rIwAAdHIIAAL5xfU1DBRxqC5S+rZNV1Qy\nLOb6ApGmfzTon3abOLMghzMBKIBKbkAqhgGNfSWvsLWdj+19fuGzJgzw9dKQrWOI\ndRx1eNYy/WB3yrTfQ4590WEYs2RnHV1VfjrR/Si20lWk42sJXRqsNuYvSZrfrtNE\nRw28CmPtyI7e4Gmjx59o8MPL9gLf/Xqae+MENwSqmSdswc38ENUjbF9AUkp8mirZ\nXRO8L+t6/tXBBgD0tVpdPGoznBPCX0Xuz4p4KhUag7Z+6+/1qKeaRMcw+5xYg2mt\nCiD4G20Bky1IA+uol5kkj8brTj5001OvhlF6TCggkH7Vz35fwAGR219y6YNDeDk=\n=lGpt\n-----END PGP SIGNATURE-----\n",
"payload": "tree b064083a26cf3848a4a772a26247a3891a9d6a2c\nparent 5e21157d86a4f589891e90f4103b3a411af889a3\nauthor Brian Vaughn <bvaughn@fb.com> 1578431136 -0800\ncommitter GitHub <noreply@github.com> 1578431136 -0800\n\nRenamed \"ReactDOM-fb\" imports to \"ReactDOM\" in www shims (#17797)\n\n* Renamed \"ReactDOM-fb\" imports to \"ReactDOM\" in www shims\r\n\r\n* Removed ReactDOMComponentTree_DO_NOT_USE.js\r\n"
}
},
"url": "https://api.github.com/repos/facebook/react/commits/6250462bed19c9f18a8cf3c2b5fcaf9aba1df72b",
"html_url": "https://github.com/facebook/react/commit/6250462bed19c9f18a8cf3c2b5fcaf9aba1df72b",
"comments_url": "https://api.github.com/repos/facebook/react/commits/6250462bed19c9f18a8cf3c2b5fcaf9aba1df72b/comments",
"author": {
"login": "bvaughn",
"id": 29597,
"node_id": "MDQ6VXNlcjI5NTk3",
"avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/bvaughn",
"html_url": "https://github.com/bvaughn",
"followers_url": "https://api.github.com/users/bvaughn/followers",
"following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
"gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
"starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
"organizations_url": "https://api.github.com/users/bvaughn/orgs",
"repos_url": "https://api.github.com/users/bvaughn/repos",
"events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
"received_events_url": "https://api.github.com/users/bvaughn/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "web-flow",
"id": 19864447,
"node_id": "MDQ6VXNlcjE5ODY0NDQ3",
"avatar_url": "https://avatars3.githubusercontent.com/u/19864447?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/web-flow",
"html_url": "https://github.com/web-flow",
"followers_url": "https://api.github.com/users/web-flow/followers",
"following_url": "https://api.github.com/users/web-flow/following{/other_user}",
"gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
"starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
"organizations_url": "https://api.github.com/users/web-flow/orgs",
"repos_url": "https://api.github.com/users/web-flow/repos",
"events_url": "https://api.github.com/users/web-flow/events{/privacy}",
"received_events_url": "https://api.github.com/users/web-flow/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "5e21157d86a4f589891e90f4103b3a411af889a3",
"url": "https://api.github.com/repos/facebook/react/commits/5e21157d86a4f589891e90f4103b3a411af889a3",
"html_url": "https://github.com/facebook/react/commit/5e21157d86a4f589891e90f4103b3a411af889a3"
}
]
},
{
"sha": "5e21157d86a4f589891e90f4103b3a411af889a3",
"node_id": "MDY6Q29tbWl0MTAyNzAyNTA6NWUyMTE1N2Q4NmE0ZjU4OTg5MWU5MGY0MTAzYjNhNDExYWY4ODlhMw==",
"commit": {
"author": {
"name": "Dominic Gannaway",
"email": "trueadm@users.noreply.github.com",
"date": "2020-01-07T19:45:26Z"
},
"committer": {
"name": "GitHub",
"email": "noreply@github.com",
"date": "2020-01-07T19:45:26Z"
},
"message": "[react-interactions] Fix Hover issues with portals (#17765)",
"tree": {
"sha": "5f110e0146d49a0e2a9466ac21c94afd38f390ca",
"url": "https://api.github.com/repos/facebook/react/git/trees/5f110e0146d49a0e2a9466ac21c94afd38f390ca"
},
"url": "https://api.github.com/repos/facebook/react/git/commits/5e21157d86a4f589891e90f4103b3a411af889a3",
"comment_count": 0,
"verification": {
"verified": true,
"reason": "valid",
"signature": "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJeFN/WCRBK7hj4Ov3rIwAAdHIIAJyWs+18ORnCVcsy/lLJn8Pi\nclm5C9p0J41/53lhjdVyq/oOi8UCnkhNfZX6Q8iN4lYF3jYVjAm2WdbCsoL+gPzt\n/V+ImDUTLNgxtD768ZQxFEBbMvMUn5Qvby3vjLbwlNgDDuE4OZwxCbk3DtZyJY/P\noOfJwrbFKm44I2gzct46qQHJ8r4mrNmQInMC4bYPiWMluxYZ4u3X7yP/p+qnl6m3\n+x5XrBYTa2/Yfo9/T7ULaW4XWpP1Zp9bmCoSYVwoBqW+JeLP5kfmcqfb1b0U32Rp\nf6kFtfp4Mya7CcwVA2dNyHalfWmfaOCSssGjq92tx0XJvwmXN79EcPQVuDRBQwo=\n=vvYw\n-----END PGP SIGNATURE-----\n",
"payload": "tree 5f110e0146d49a0e2a9466ac21c94afd38f390ca\nparent 40568e9773276d94e6aa5b70fed4355a7291827f\nauthor Dominic Gannaway <trueadm@users.noreply.github.com> 1578426326 +0000\ncommitter GitHub <noreply@github.com> 1578426326 +0000\n\n[react-interactions] Fix Hover issues with portals (#17765)\n\n"
}
},
"url": "https://api.github.com/repos/facebook/react/commits/5e21157d86a4f589891e90f4103b3a411af889a3",
"html_url": "https://github.com/facebook/react/commit/5e21157d86a4f589891e90f4103b3a411af889a3",
"comments_url": "https://api.github.com/repos/facebook/react/commits/5e21157d86a4f589891e90f4103b3a411af889a3/comments",
"author": {
"login": "trueadm",
"id": 1519870,
"node_id": "MDQ6VXNlcjE1MTk4NzA=",
"avatar_url": "https://avatars0.githubusercontent.com/u/1519870?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/trueadm",
"html_url": "https://github.com/trueadm",
"followers_url": "https://api.github.com/users/trueadm/followers",
"following_url": "https://api.github.com/users/trueadm/following{/other_user}",
"gists_url": "https://api.github.com/users/trueadm/gists{/gist_id}",
"starred_url": "https://api.github.com/users/trueadm/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/trueadm/subscriptions",
"organizations_url": "https://api.github.com/users/trueadm/orgs",
"repos_url": "https://api.github.com/users/trueadm/repos",
"events_url": "https://api.github.com/users/trueadm/events{/privacy}",
"received_events_url": "https://api.github.com/users/trueadm/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "web-flow",
"id": 19864447,
"node_id": "MDQ6VXNlcjE5ODY0NDQ3",
"avatar_url": "https://avatars3.githubusercontent.com/u/19864447?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/web-flow",
"html_url": "https://github.com/web-flow",
"followers_url": "https://api.github.com/users/web-flow/followers",
"following_url": "https://api.github.com/users/web-flow/following{/other_user}",
"gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
"starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
"organizations_url": "https://api.github.com/users/web-flow/orgs",
"repos_url": "https://api.github.com/users/web-flow/repos",
"events_url": "https://api.github.com/users/web-flow/events{/privacy}",
"received_events_url": "https://api.github.com/users/web-flow/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "40568e9773276d94e6aa5b70fed4355a7291827f",
"url": "https://api.github.com/repos/facebook/react/commits/40568e9773276d94e6aa5b70fed4355a7291827f",
"html_url": "https://github.com/facebook/react/commit/40568e9773276d94e6aa5b70fed4355a7291827f"
}
]
},
{
"sha": "40568e9773276d94e6aa5b70fed4355a7291827f",
"node_id": "MDY6Q29tbWl0MTAyNzAyNTA6NDA1NjhlOTc3MzI3NmQ5NGU2YWE1YjcwZmVkNDM1NWE3MjkxODI3Zg==",
"commit": {
"author": {
"name": "Brian Vaughn",
"email": "bvaughn@fb.com",
"date": "2020-01-06T18:37:20Z"
},
"committer": {
"name": "Brian Vaughn",
"email": "bvaughn@fb.com",
"date": "2020-01-06T18:37:20Z"
},
"message": "Updated DevTools CHANGELOG to add pending release details",
"tree": {
"sha": "114ed7e4af78f4350d5f4b9e7105a6a66e820cd1",
"url": "https://api.github.com/repos/facebook/react/git/trees/114ed7e4af78f4350d5f4b9e7105a6a66e820cd1"
},
"url": "https://api.github.com/repos/facebook/react/git/commits/40568e9773276d94e6aa5b70fed4355a7291827f",
"comment_count": 0,
"verification": {
"verified": false,
"reason": "unsigned",
"signature": null,
"payload": null
}
},
"url": "https://api.github.com/repos/facebook/react/commits/40568e9773276d94e6aa5b70fed4355a7291827f",
"html_url": "https://github.com/facebook/react/commit/40568e9773276d94e6aa5b70fed4355a7291827f",
"comments_url": "https://api.github.com/repos/facebook/react/commits/40568e9773276d94e6aa5b70fed4355a7291827f/comments",
"author": {
"login": "bvaughn",
"id": 29597,
"node_id": "MDQ6VXNlcjI5NTk3",
"avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/bvaughn",
"html_url": "https://github.com/bvaughn",
"followers_url": "https://api.github.com/users/bvaughn/followers",
"following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
"gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
"starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
"organizations_url": "https://api.github.com/users/bvaughn/orgs",
"repos_url": "https://api.github.com/users/bvaughn/repos",
"events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
"received_events_url": "https://api.github.com/users/bvaughn/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "bvaughn",
"id": 29597,
"node_id": "MDQ6VXNlcjI5NTk3",
"avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/bvaughn",
"html_url": "https://github.com/bvaughn",
"followers_url": "https://api.github.com/users/bvaughn/followers",
"following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
"gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
"starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
"organizations_url": "https://api.github.com/users/bvaughn/orgs",
"repos_url": "https://api.github.com/users/bvaughn/repos",
"events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
"received_events_url": "https://api.github.com/users/bvaughn/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "5586b3022c667bec0d797a36691365b787437ce2",
"url": "https://api.github.com/repos/facebook/react/commits/5586b3022c667bec0d797a36691365b787437ce2",
"html_url": "https://github.com/facebook/react/commit/5586b3022c667bec0d797a36691365b787437ce2"
}
]
},
{
"sha": "5586b3022c667bec0d797a36691365b787437ce2",
"node_id": "MDY6Q29tbWl0MTAyNzAyNTA6NTU4NmIzMDIyYzY2N2JlYzBkNzk3YTM2NjkxMzY1Yjc4NzQzN2NlMg==",
"commit": {
"author": {
"name": "Brian Vaughn",
"email": "bvaughn@fb.com",
"date": "2020-01-06T18:36:13Z"
},
"committer": {
"name": "Brian Vaughn",
"email": "bvaughn@fb.com",
"date": "2020-01-06T18:36:13Z"
},
"message": "Merge branch 'GasimGasimzada-scope-devtools-styles'",
"tree": {
"sha": "af9530c5fe995d6c99037e51e00e812cd3f84f5e",
"url": "https://api.github.com/repos/facebook/react/git/trees/af9530c5fe995d6c99037e51e00e812cd3f84f5e"
},
"url": "https://api.github.com/repos/facebook/react/git/commits/5586b3022c667bec0d797a36691365b787437ce2",
"comment_count": 0,
"verification": {
"verified": false,
"reason": "unsigned",
"signature": null,
"payload": null
}
},
"url": "https://api.github.com/repos/facebook/react/commits/5586b3022c667bec0d797a36691365b787437ce2",
"html_url": "https://github.com/facebook/react/commit/5586b3022c667bec0d797a36691365b787437ce2",
"comments_url": "https://api.github.com/repos/facebook/react/commits/5586b3022c667bec0d797a36691365b787437ce2/comments",
"author": {
"login": "bvaughn",
"id": 29597,
"node_id": "MDQ6VXNlcjI5NTk3",
"avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/bvaughn",
"html_url": "https://github.com/bvaughn",
"followers_url": "https://api.github.com/users/bvaughn/followers",
"following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
"gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
"starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
"organizations_url": "https://api.github.com/users/bvaughn/orgs",
"repos_url": "https://api.github.com/users/bvaughn/repos",
"events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
"received_events_url": "https://api.github.com/users/bvaughn/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "bvaughn",
"id": 29597,
"node_id": "MDQ6VXNlcjI5NTk3",
"avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/bvaughn",
"html_url": "https://github.com/bvaughn",
"followers_url": "https://api.github.com/users/bvaughn/followers",
"following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
"gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
"starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
"organizations_url": "https://api.github.com/users/bvaughn/orgs",
"repos_url": "https://api.github.com/users/bvaughn/repos",
"events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
"received_events_url": "https://api.github.com/users/bvaughn/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "fc921a1693aaeb9eb7fc2745a3ff5a9d33aefeee",
"url": "https://api.github.com/repos/facebook/react/commits/fc921a1693aaeb9eb7fc2745a3ff5a9d33aefeee",
"html_url": "https://github.com/facebook/react/commit/fc921a1693aaeb9eb7fc2745a3ff5a9d33aefeee"
},
{
"sha": "7580d6717c11fb745b89e8e1aecded7c6d025192",
"url": "https://api.github.com/repos/facebook/react/commits/7580d6717c11fb745b89e8e1aecded7c6d025192",
"html_url": "https://github.com/facebook/react/commit/7580d6717c11fb745b89e8e1aecded7c6d025192"
}
]
},
{
"sha": "7580d6717c11fb745b89e8e1aecded7c6d025192",
"node_id": "MDY6Q29tbWl0MTAyNzAyNTA6NzU4MGQ2NzE3YzExZmI3NDViODllOGUxYWVjZGVkN2M2ZDAyNTE5Mg==",
"commit": {
"author": {
"name": "Brian Vaughn",
"email": "bvaughn@fb.com",
"date": "2020-01-06T18:35:36Z"
},
"committer": {
"name": "Brian Vaughn",
"email": "bvaughn@fb.com",
"date": "2020-01-06T18:35:36Z"
},
"message": "Fixed padding problem in standalone shell",
"tree": {
"sha": "af9530c5fe995d6c99037e51e00e812cd3f84f5e",
"url": "https://api.github.com/repos/facebook/react/git/trees/af9530c5fe995d6c99037e51e00e812cd3f84f5e"
},
"url": "https://api.github.com/repos/facebook/react/git/commits/7580d6717c11fb745b89e8e1aecded7c6d025192",
"comment_count": 0,
"verification": {
"verified": false,
"reason": "unsigned",
"signature": null,
"payload": null
}
},
"url": "https://api.github.com/repos/facebook/react/commits/7580d6717c11fb745b89e8e1aecded7c6d025192",
"html_url": "https://github.com/facebook/react/commit/7580d6717c11fb745b89e8e1aecded7c6d025192",
"comments_url": "https://api.github.com/repos/facebook/react/commits/7580d6717c11fb745b89e8e1aecded7c6d025192/comments",
"author": {
"login": "bvaughn",
"id": 29597,
"node_id": "MDQ6VXNlcjI5NTk3",
"avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/bvaughn",
"html_url": "https://github.com/bvaughn",
"followers_url": "https://api.github.com/users/bvaughn/followers",
"following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
"gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
"starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
"organizations_url": "https://api.github.com/users/bvaughn/orgs",
"repos_url": "https://api.github.com/users/bvaughn/repos",
"events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
"received_events_url": "https://api.github.com/users/bvaughn/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "bvaughn",
"id": 29597,
"node_id": "MDQ6VXNlcjI5NTk3",
"avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/bvaughn",
"html_url": "https://github.com/bvaughn",
"followers_url": "https://api.github.com/users/bvaughn/followers",
"following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
"gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
"starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
"organizations_url": "https://api.github.com/users/bvaughn/orgs",
"repos_url": "https://api.github.com/users/bvaughn/repos",
"events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
"received_events_url": "https://api.github.com/users/bvaughn/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "80e32487b989bb948293876583b9ced90022d9b1",
"url": "https://api.github.com/repos/facebook/react/commits/80e32487b989bb948293876583b9ced90022d9b1",
"html_url": "https://github.com/facebook/react/commit/80e32487b989bb948293876583b9ced90022d9b1"
}
]
},
{
"sha": "80e32487b989bb948293876583b9ced90022d9b1",
"node_id": "MDY6Q29tbWl0MTAyNzAyNTA6ODBlMzI0ODdiOTg5YmI5NDgyOTM4NzY1ODNiOWNlZDkwMDIyZDliMQ==",
"commit": {
"author": {
"name": "Brian Vaughn",
"email": "bvaughn@fb.com",
"date": "2020-01-06T18:23:55Z"
},
"committer": {
"name": "Brian Vaughn",
"email": "bvaughn@fb.com",
"date": "2020-01-06T18:23:55Z"
},
"message": "Fixed box-sizing problem in test shell",
"tree": {
"sha": "fec6b9f59e8bcee69c8ed00118d262ceb785fca5",
"url": "https://api.github.com/repos/facebook/react/git/trees/fec6b9f59e8bcee69c8ed00118d262ceb785fca5"
},
"url": "https://api.github.com/repos/facebook/react/git/commits/80e32487b989bb948293876583b9ced90022d9b1",
"comment_count": 0,
"verification": {
"verified": false,
"reason": "unsigned",
"signature": null,
"payload": null
}
},
"url": "https://api.github.com/repos/facebook/react/commits/80e32487b989bb948293876583b9ced90022d9b1",
"html_url": "https://github.com/facebook/react/commit/80e32487b989bb948293876583b9ced90022d9b1",
"comments_url": "https://api.github.com/repos/facebook/react/commits/80e32487b989bb948293876583b9ced90022d9b1/comments",
"author": {
"login": "bvaughn",
"id": 29597,
"node_id": "MDQ6VXNlcjI5NTk3",
"avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/bvaughn",
"html_url": "https://github.com/bvaughn",
"followers_url": "https://api.github.com/users/bvaughn/followers",
"following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
"gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
"starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
"organizations_url": "https://api.github.com/users/bvaughn/orgs",
"repos_url": "https://api.github.com/users/bvaughn/repos",
"events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
"received_events_url": "https://api.github.com/users/bvaughn/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "bvaughn",
"id": 29597,
"node_id": "MDQ6VXNlcjI5NTk3",
"avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/bvaughn",
"html_url": "https://github.com/bvaughn",
"followers_url": "https://api.github.com/users/bvaughn/followers",
"following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
"gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
"starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
"organizations_url": "https://api.github.com/users/bvaughn/orgs",
"repos_url": "https://api.github.com/users/bvaughn/repos",
"events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
"received_events_url": "https://api.github.com/users/bvaughn/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "c1b573bf2fcd7a550d4d8c052b155562290e8fc5",
"url": "https://api.github.com/repos/facebook/react/commits/c1b573bf2fcd7a550d4d8c052b155562290e8fc5",
"html_url": "https://github.com/facebook/react/commit/c1b573bf2fcd7a550d4d8c052b155562290e8fc5"
}
]
},
{
"sha": "c1b573bf2fcd7a550d4d8c052b155562290e8fc5",
"node_id": "MDY6Q29tbWl0MTAyNzAyNTA6YzFiNTczYmYyZmNkN2E1NTBkNGQ4YzA1MmIxNTU1NjIyOTBlOGZjNQ==",
"commit": {
"author": {
"name": "Brian Vaughn",
"email": "bvaughn@fb.com",
"date": "2020-01-06T18:13:35Z"
},
"committer": {
"name": "Brian Vaughn",
"email": "bvaughn@fb.com",
"date": "2020-01-06T18:13:35Z"
},
"message": "Merge branch 'scope-devtools-styles' of https://github.com/GasimGasimzada/react into GasimGasimzada-scope-devtools-styles",
"tree": {
"sha": "e9417f1b8c451f2c000eee909ec316c8b473b260",
"url": "https://api.github.com/repos/facebook/react/git/trees/e9417f1b8c451f2c000eee909ec316c8b473b260"
},
"url": "https://api.github.com/repos/facebook/react/git/commits/c1b573bf2fcd7a550d4d8c052b155562290e8fc5",
"comment_count": 0,
"verification": {
"verified": false,
"reason": "unsigned",
"signature": null,
"payload": null
}
},
"url": "https://api.github.com/repos/facebook/react/commits/c1b573bf2fcd7a550d4d8c052b155562290e8fc5",
"html_url": "https://github.com/facebook/react/commit/c1b573bf2fcd7a550d4d8c052b155562290e8fc5",
"comments_url": "https://api.github.com/repos/facebook/react/commits/c1b573bf2fcd7a550d4d8c052b155562290e8fc5/comments",
"author": {
"login": "bvaughn",
"id": 29597,
"node_id": "MDQ6VXNlcjI5NTk3",
"avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/bvaughn",
"html_url": "https://github.com/bvaughn",
"followers_url": "https://api.github.com/users/bvaughn/followers",
"following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
"gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
"starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
"organizations_url": "https://api.github.com/users/bvaughn/orgs",
"repos_url": "https://api.github.com/users/bvaughn/repos",
"events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
"received_events_url": "https://api.github.com/users/bvaughn/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "bvaughn",
"id": 29597,
"node_id": "MDQ6VXNlcjI5NTk3",
"avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/bvaughn",
"html_url": "https://github.com/bvaughn",
"followers_url": "https://api.github.com/users/bvaughn/followers",
"following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
"gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
"starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
"organizations_url": "https://api.github.com/users/bvaughn/orgs",
"repos_url": "https://api.github.com/users/bvaughn/repos",
"events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
"received_events_url": "https://api.github.com/users/bvaughn/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "fc921a1693aaeb9eb7fc2745a3ff5a9d33aefeee",
"url": "https://api.github.com/repos/facebook/react/commits/fc921a1693aaeb9eb7fc2745a3ff5a9d33aefeee",
"html_url": "https://github.com/facebook/react/commit/fc921a1693aaeb9eb7fc2745a3ff5a9d33aefeee"
},
{
"sha": "9cc094a19a9e43d33ba5ac713935e657ea4e3cdd",
"url": "https://api.github.com/repos/facebook/react/commits/9cc094a19a9e43d33ba5ac713935e657ea4e3cdd",
"html_url": "https://github.com/facebook/react/commit/9cc094a19a9e43d33ba5ac713935e657ea4e3cdd"
}
]
}
],
      nameList: []
    };
  }

  formatDeployementData=(data)=>{
    let dates = data.map(item => item.created_at ? item.created_at.substr(0, 10) : null)
    let obj = {};

    dates.map(item => {
      if (obj[item]) {
        obj[item] = obj[item] + 1
      } else {
        obj[item] = 1;
      }
    });
    console.log(obj);
    return Object.keys(obj).map(item => {
      return { x: new Date(item.split('-').join(',')), y: obj[item] }

    })
  }
  componentDidMount() {
                        //https://api.github.com/repos/facebook/react/deployments
                        //https://api.github.com/repos/facebook/react/commits
                        // const {
                        //   match: { params }
                        // } = this.props;
                        // fetch(`https://api.github.com/repos/${params.owner}/${params.name}`)
                        //   .then(res => res.json())
                        //   .then(result => {
                        //     console.log(result);
                        //   });
                      }
  render() {
    const { result, contributors, languages, deployments} = this.state;

    const topFiveContributorData = contributors.map(item => {
      return { "label": item.login, "y" : item.contributions }
    })
    const contributorsList = contributors.map(item => {
      return { "img_url": item.avatar_url, "name": item.login, "url": item.url }
    })
    const languagesData = Object.keys(languages).map(item => {
      return { "label": item, "y": languages[item] }
    })
    const deploymentData = this.formatDeployementData(deployments)
    console.log(contributorsList)
    return (
      <div className="wrapper">
        <RepoDescription result={result}/>

        <Box project={result} />
        <div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="section section-fix-height"> 
                <div className="section-header star">Top 5 Contributors</div>
                <div className="chart-container">
                  <PieChart data={topFiveContributorData.slice(0, 5)} />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="section section-fix-height">
                <div className="section-header fork">Languages contribution</div>
                <div className="chart-container">
                  <BarChart data={languagesData} />
                </div>
                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 ">
              <div className="section section-fix-height">
                <div className="section-header watch">Deployment status</div>
                <div className="chart-container">
                  <DateTimeChart data={deploymentData} />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="section section-fix-height">
                <div className="section-header issues">Contributors</div>
                <div className="chart-container contact-chip-container">
                  {contributorsList.map(item=>{
                    return <ContactChip data={item} key={item.url}/>
                  })} 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DashboardPage;
