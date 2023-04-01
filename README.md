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

5. Portfolio Management: Users will be able to view their own research portfolio, which includes contributions they have made




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
