# giant_dev_ai
develop with the generative AI.

# Research Collaboration Web Application Design Document

## Overview

The goal of this web application is to facilitate collaboration among researchers by allowing them to easily propose and contribute to research projects. The application will feature a backlog for each research project, where researchers can propose hypotheses, and track experimental results, data, and ideas for improvement. Other researchers can also make proposals, and if approved by the project manager, will receive contributions and recognition in their own research portfolio.

## Technical Stack

The following technologies will be used:

- Frontend: React
- Backend: Node.js
- Database: MongoDB

## Features

The following features are planned:

1. User Authentication: Users will be able to create an account, log in, and log out.

2. Research Project Management: Users will be able to create new research projects, add or remove team members, and manage the backlog of research tasks.

3. Backlog Management: Users will be able to create new tasks, assign tasks to team members, and manage the progress of each task.

4. Proposal Management: Users will be able to propose new ideas or modifications to existing tasks. Proposals will be reviewed by the project manager, and if approved, the contributor will receive recognition in their own research portfolio.

5. Portfolio Management: Users will be able to view their own research portfolio, which includes contributions they have made to research projects, and recognition they have received for their contributions.

## User Interface

The following wireframes illustrate the proposed user interface:

![Wireframes](./wireframes.png)

## API Specification

The following API endpoints will be implemented:

1. `POST /api/users/register`: Creates a new user account.

2. `POST /api/users/login`: Logs in a user.

3. `GET /api/users/logout`: Logs out a user.

4. `POST /api/projects`: Creates a new research project.

5. `GET /api/projects/:projectId`: Retrieves a research project by ID.

6. `PUT /api/projects/:projectId`: Updates a research project.

7. `DELETE /api/projects/:projectId`: Deletes a research project.

8. `POST /api/tasks`: Creates a new task.

9. `GET /api/tasks/:taskId`: Retrieves a task by ID.

10. `PUT /api/tasks/:taskId`: Updates a task.

11. `DELETE /api/tasks/:taskId`: Deletes a task.

12. `POST /api/proposals`: Creates a new proposal.

13. `GET /api/proposals/:proposalId`: Retrieves a proposal by ID.

14. `PUT /api/proposals/:proposalId`: Updates a proposal.

15. `DELETE /api/proposals/:proposalId`: Deletes a proposal.

16. `GET /api/portfolio/:userId`: Retrieves a user's research portfolio.

## Database Schema

The following MongoDB collections will be used:

1. `users`: Stores user account information.

  {
_id: ObjectId,
username: String,
password: String,
portfolio: [ObjectId] // Array of portfolio items
}


2. `projects`: Stores research project information.

{
_id: ObjectId,
name: String,
description: String,
team: [ObjectId] // Array of user IDs
}


3. `tasks`: Stores research task information.

{
_id: ObjectId,
project: ObjectId, // ID of parent project
name: String,
description: String,
status: String, // One of "todo", "in_progress", "done"
assignee: ObjectId, // ID of assigned user
proposals: [ObjectId] // Array of

# 研究課題管理アプリケーション DesignDoc
## 概要
研究課題のレポジトリごとにバックログを仮説の形で積み上げて研究過程を整理し、実証結果やデータ、仮説の改善点、再実験の結果などを管理するWebアプリケーションを構築する。

研究者同士がより手軽に共同研究を行えるようにすることを目的とし、提案と受け入れはGitHubのプルリクエストとマージのような形式で行う。

## 技術スタック
- フロントエンド: React
- バックエンド: Node.js
- データベース: MongoDB
## 機能要件
### 課題の作成・編集
- 課題は仮説の形で作成できる
- 課題にはタイトル、詳細、状態、優先度などを設定できる
- 課題にはファイルの添付が可能
- 課題を削除することができる
- 課題の状態を変更できる
### コメント
- 課題に対してコメントを追加できる
- コメントにはファイルの添付が可能
- コメントを削除することができる
### プルリクエスト
- 課題に対してプルリクエストを送信できる
- プルリクエストにはタイトル、説明、変更内容、テスト結果などを設定できる
- プルリクエストに対してコメントを追加できる
- プルリクエストを削除することができる
- プルリクエストをマージすることができる
### ユーザー管理
- ユーザーの登録・ログインができる
- ユーザー情報の編集ができる
- ユーザーの一覧を表示できる
- 管理者ユーザーはユーザーの承認・拒否ができる
## データベース設計
### 課題
フィールド名	データ型
_id	ObjectId
title	string
description	string
status	string
priority	string
attachments	array
created_at	date
updated_at	date
### ユーザー認証・認可
- ユーザー認証はJWTを用いた認証を採用する
- ユーザー認証が必要なAPIに対しては認可を行う
- 認証・認可に失敗した場合は401エラーを返す
### バックログの管理
- バックログは仮説として提出できる形式を採用する
- バックログはレポジトリごとに存在し、レポジトリの管理者が承認することで公開される
- 承認されたバックログにはコントリビューションポイントが与えられる
- バックログは提出者自身や他の研究者からの提案を受け付けることができる
- バックログにはコメントや実証結果、再実験の結果などを追加することができる
### レポジトリの管理
- レポジトリはGitHubと同様の形式で作成され、管理者が設定を行うことができる
- レポジトリの管理者は承認されたバックログのみを公開することができる
- レポジトリの管理者はユーザーのアクセス権限を設定できる
- レポジトリにはREADMEやコードのアップロードができる
### 研究者の履歴書
- コントリビューションポイントがあるバックログを提出した研究者は、そのポイントが履歴書に反映される
- 履歴書には研究者が提出したバックログの一覧やコントリビューションポイントが表示される
- 履歴書には研究者のプロフィール情報も表示される


---
## バックエンドのAPI
### ログイン
- ユーザー名とパスワードでログインできる
- OAuth2.0を用いたソーシャルログインにも対応する
- JWTトークンを発行し、セッション管理を行う
### レポジトリ操作
- レポジトリの作成、編集、削除ができる
- レポジトリごとにコントリビューターを設定できる
- レポジトリごとにバックログを作成できる
### バックログ操作
バックログの作成、編集、削除ができる
バックログに対してコメントを追加できる
バックログのステータスを変更できる

### プルリクエスト操作
- プルリクエストの作成、編集、削除ができる
- プルリクエストに対してコメントを追加できる
- プルリクエストのマージができる
- マージ時には、コンフリクトの解消を行う
### ユーザー管理
- ユーザー情報の取得、作成、更新、削除ができる
- ユーザーごとに所属しているレポジトリやコントリビューションを確認できる
- パスワードの変更やプロフィール画像のアップロードもできる
## フロントエンドの機能
### ログイン画面
- ユーザー名とパスワードを入力してログインできる
- ソーシャルログインにも対応する
### レポジトリ一覧画面
- 所属しているレポジトリの一覧を表示する
- レポジトリの作成ができる
### レポジトリ詳細画面
- レポジトリの詳細情報とバックログ一覧を表示する
- バックログの作成や編集、ステータスの変更ができる
- コントリビューターを設定できる
### バックログ詳細画面
- バックログの詳細情報とコメント一覧を表示する
- コメントの追加や編集、ステータスの変更ができる
## プルリクエスト詳細画面
- プルリクエストの詳細情報とコメント一覧を表示する
- コメントの追加や編集、マージができる



# フロントエンドの要件
## UIデザイン
モダンでシンプルなUIデザインを採用すること。
レスポンシブなレイアウトを採用し、デスクトップ、タブレット、スマートフォンなどの様々なデバイスに対応すること。
## 研究課題の管理機能
研究課題のレポジトリを作成し、課題に関する情報を入力・編集できる機能を実装すること。
レポジトリごとにバックログを仮説の形で積み上げる機能を実装し、研究過程を整理できるようにすること。
実証結果やデータ、仮説の改善点、再実験の結果などを提案できる機能を実装すること。
提案した内容について、レポジトリを管理する人から承認を得てコントリビューションが与えられる機能を実装すること。
研究者の履歴書に反映できるような、コントリビューションの集計機能を実装すること。
## GitHubのプルリクエストとマージに相当する機能
バージョン管理機能を実装し、提案内容の承認や却下を決定することができるようにすること。
変更の履歴を確認できるようにすること。
レポジトリごとに、コミットの差分を確認できる機能を実装すること。
## その他
ユーザーアカウントを作成し、認証・認可機能を実装すること。
通知機能を実装し、新しい提案やコメントがあった場合にユーザーに通知が届くようにすること。
検索機能を実装し、レポジトリ内のコンテンツを検索できるようにすること。
## バックエンドの要件
## 課題管理機能
研究課題のレポジトリを作成・編集・削除できるAPIを実装すること。
研究課題に関する情報を取得するAPIを実装すること。
## バージョン管理機能
変更履歴を保存するAPIを実装

# タイトル
共同研究プラットフォーム

# 概要
本プラットフォームは、研究者同士が手軽に共同研究を行うことを目的としたWebアプリケーションです。研究課題のレポジトリごとにバックログを仮説の形で積み上げ、研究過程を整理しつつ、実証結果やデータ、仮説の改善点、再実験の結果などを提案できます。提案された内容は、レポジトリを管理する人に承認された場合にコントリビューションとして認められ、研究者の履歴書にも記録されます。

# ユースケース
研究者が新しい課題を追加し、バックログとして積み上げる
研究者が仮説やアイデアを提案し、共同研究者からのフィードバックを受ける
研究者がデータや実証結果をアップロードし、共同研究者と共有する
レポジトリを管理する人が提案された内容を承認し、コントリビューションとして認める
研究者が自身の履歴書に記録されたコントリビューションを確認する
# アーキテクチャ
フロントエンド: React
バックエンド: Node.js
データベース: MongoDB
# 機能要件
研究課題の追加/削除/編集
バックログの追加/削除/編集
仮説やアイデアの提案とフィードバック
データや実証結果のアップロード
提案の承認とコントリビューションの記録
研究者の履歴書の確認
# データモデル
User: ユーザー情報を保存するモデル
Project: 研究課題情報を保存するモデル
Backlog: バックログ情報を保存するモデル
Hypothesis: 仮説やアイデアを保存するモデル
Data: データや実証結果を保存するモデル
Contribution: コントリビュ
