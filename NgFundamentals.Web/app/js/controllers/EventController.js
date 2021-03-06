﻿'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.snippet = '<span style="color:red">hi there<span>';
        $scope.boolValue = false;
        $scope.mystyle = { color: 'red' };
        $scope.myclass = "blue";
        $scope.buttonDisabled = true;

        $scope.sortorder = 'name';
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2013',
            time: '10:30 am',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                state: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'In this session you will learn the ins and outs of...',
                    upvoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'John Doe',
                    duration: 2,
                    level: 'Introductory',
                    abstract: 'This session will take a closer look at scopes',
                    upvoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Jane Doe',
                    duration: 4,
                    level: 'Intermediate',
                    abstract: 'Controllers are the beginning of everthing Angular',
                    upvoteCount: 0
                }
            ]
        }

        $scope.upvoteSession = function(session) {
            session.upvoteCount++;
        }

        $scope.downvoteSession = function (session) {
            session.upvoteCount--;
        }
    }
);