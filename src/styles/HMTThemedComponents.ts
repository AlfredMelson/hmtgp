import { alpha, Theme } from '@mui/material/styles'
import HMTSwatch from './HMTSwatch'

export default function HMTThemedComponents(theme: Theme) {
  return {
    components: {
      MuiBadge: {
        defaultProps: {},
        styleOverrides: {
          root: {
            backgroundImage: 'none'
          }, // Styles applied to the root element
          badge: {
            borderRadius: '4px',
            bgcolor: HMTSwatch.Coral[400]
          } // Styles applied to the root element
        }
      },
      MuiButton: {
        defaultProps: {
          size: 'small',
          variant: 'outlined'
        },
        styleOverrides: {
          root: {
            msTouchAction: 'manipulation',
            touchAction: 'manipulation',
            webkitTapHighlightColor: 'transparent',
            transition: theme.transitions.create(['all'], {
              duration: theme.transitions.duration.standard,
              easing: theme.transitions.easing.easeInOut
            })
          }, // Styles applied to the root element
          text: {}, // Styles applied to the root element if variant="text"
          outlined: {}, // Styles applied to the root element if variant="outlined"
          contained: {}, // Styles applied to the root element if variant="contained"
          disabled: {}, // State class applied to the root element if disabled={true}
          textSizeSmall: { borderRadius: theme.spacing(3) }, // State class applied to the root element if disabled={true}
          endIcon: {
            '& .MuiButton-iconSizeSmall': {
              margin: 0
            }
          } // Styles applied to the endIcon element if supplied.
        }
      },
      MuiButtonBase: {
        defaultProps: {
          disableTouchRipple: true
        }
      },
      MuiCard: {
        defaultProps: {
          raised: true
        },
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            backgroundColor: HMTSwatch.Grey[800],
            borderRadius: '4px'
          } // Styles applied to the root element
        }
      },
      MuiCardContent: {
        defaultProps: {},
        styleOverrides: {
          root: {
            padding: theme.spacing(20)
          } // Styles applied to the root element
        }
      },
      MuiCardHeader: {
        defaultProps: {},
        styleOverrides: {
          root: {}, // Styles applied to the root element
          avatar: {}, // Styles applied to the avatar element
          action: {}, // Styles applied to the action element
          content: {}, // Styles applied to the content wrapper element
          title: {
            ...theme.typography.body1
          }, // Styles applied to the title Typography element
          subheader: { ...theme.typography.body2, color: 'white' } // Styles applied to the subheader Typography element
        }
      },
      MuiChip: {
        defaultProps: {},
        styleOverrides: {
          root: { borderRadius: '4px', paddingBottom: '2px' } // Styles applied to the root element
        }
      },
      MuiDialog: {
        defaultProps: {},
        styleOverrides: {
          root: {
            marginTop: theme.spacing(60)
          }, // Styles applied to the root element
          backdrop: {
            backgroundColor: 'transparent'
          },
          paperAnchorTop: {}, // Styles applied to the Paper component if anchor="top"
          paper: {
            backgroundColor: '#21262d',
            backgroundImage: 'none',
            margin: 0,
            padding: 0,
            borderRadius: 3,
            maxHeight: '100vh',
            bottom: '13px'
          } // Styles applied to the Paper component
        }
      },
      MuiDivider: {
        defaultProps: {},
        styleOverrides: {
          root: {
            ...theme.typography.body2,
            fontWeight: 500,
            '&:before': {
              borderTopColor: HMTSwatch.Grey[600]
            },
            '&:after': {
              borderTopColor: HMTSwatch.Grey[600]
            }
          } // Styles applied to the root element
        }
      },
      MuiIcon: {
        defaultProps: {
          fontSize: 'small'
        }
      },
      MuiIconButton: {
        defaultProps: {},
        styleOverrides: {
          root: {
            msTouchAction: 'manipulation',
            touchAction: 'manipulation',
            webkitTapHighlightColor: 'transparent',
            textDecoration: 'none',
            backgroundColor: 'transparent',
            '&:hover, & .Mui-focused': {
              backgroundColor: 'transparent'
            }
          }
        }
      },
      MuiListItemText: {
        defaultProps: {},
        styleOverrides: {
          root: {}, // Styles applied to the root element
          multiline: {
            '&.MuiListItemText-primary': { color: HMTSwatch.White[100] },
            '&.MuiListItemText-secondary': { color: HMTSwatch.White[50] }
          } // Styles applied to the Typography component if primary and secondary are set.
        }
      },
      MuiMenu: {
        defaultProps: {},
        styleOverrides: {
          root: {}, // Styles applied to the root element
          paper: {}, // Styles applied to the Paper component
          list: {
            paddingTop: 0,
            paddingBottom: 0
          } // Styles applied to the List component via `MenuList`
        }
      },
      MuiMenuItem: {
        defaultProps: {
          dense: { sm: false, md: true }
        },
        styleOverrides: {
          root: {
            borderRadius: theme.spacing(0),
            backgroundColor: HMTSwatch.Grey[800],
            '&:hover, &.Mui-focused': {
              color: theme.palette.text.primary,
              backgroundColor: alpha(HMTSwatch.Grey[700], 0.6)
            },
            '&.Mui-selected': {
              cursor: 'default',
              backgroundColor: HMTSwatch.Grey[700],
              '&:hover': {
                backgroundColor: HMTSwatch.Grey[700]
              }
            }
          }, // Styles applied to the root element
          focusVisible: {}, // State class applied to the root element if keyboard focused
          dense: {}, // Styles applied to the root element if dense
          disabled: {}, // State class applied to the root element if disabled={true}
          divider: {}, // Styles applied to the root element if divider={true}
          gutters: {}, // Styles applied to the inner `component` element unless disableGutters={true}
          selected: {} // State class applied to the root element if selected={true}
        }
      },
      MuiMenuList: {
        defaultProps: {
          dense: true
        },
        styleOverrides: {
          root: {
            backgroundColor: HMTSwatch.Grey[800],
            '&:hover': {
              backgroundColor: HMTSwatch.Grey[700]
            },
            '&.Mui-focused': {
              backgroundColor: HMTSwatch.Grey[600]
            },
            '&.Mui-selected': {
              cursor: 'default',
              backgroundColor: HMTSwatch.Grey[600],
              '&:hover': {
                backgroundColor: HMTSwatch.Grey[600]
              }
            }
          }, // Styles applied to the root element
          focusVisible: {}, // State class applied to the root element if keyboard focused
          dense: {}, // Styles applied to the root element if dense
          disabled: {}, // State class applied to the root element if disabled={true}
          divider: {}, // Styles applied to the root element if divider={true}
          gutters: {}, // Styles applied to the inner `component` element unless disableGutters={true}
          selected: {} // State class applied to the root element if selected={true}
        }
      },
      MuiSvgIcon: {
        defaultProps: {
          fontSize: 'small'
        }
      },
      MuiTab: {
        defaultProps: {
          disableFocusRipple: true,
          disableRipple: true
        },
        styleOverrides: {
          root: {
            borderRadius: theme.spacing(3, 3, 0, 0)
          }, // Styles applied to the root element
          labelIcon: {}, // Styles applied to the root element if both icon and label are provided
          selected: {}, // State class applied to the root element if selected={true} (controlled by the Tabs component)
          disabled: {}, // State class applied to the root element if disabled={true} (controlled by the Tabs component)
          fullWidth: {}, // Styles applied to the root element if fullWidth={true} (controlled by the Tabs component)
          wrapped: {}, // Styles applied to the root element if wrapped={true}
          iconWrapper: {} // Styles applied to the wrapper element of `icon` if icon is provided
        }
      },
      MuiTabs: {
        defaultProps: {},
        styleOverrides: {
          indicator: {
            backgroundColor: 'transparent'
          }
        }
      },
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
          size: 'small',
          margin: 'dense'
        },
        styleOverrides: {
          root: {} // Styles applied to the root element
        }
      },
      MuiTooltip: {
        defaultProps: {
          arrow: false, // If true, adds an arrow to the tooltip
          enterDelay: 400, // ms to wait before showing the tooltip
          enterNextDelay: 50, // ms to wait before showing the tooltip when one was already recently opened
          enterTouchDelay: 800, // ms a user must touch the element before showing the tooltip
          leaveDelay: 50, // ms to wait before hiding the tooltip
          leaveTouchDelay: 1000, // ms after the user stops touching an element before hiding the tooltip
          placement: 'bottom' // position the tooltip will appear, 'bottom' is default
        },
        styleOverrides: {
          arrow: {}, // Styles applied to the arrow element
          popper: {}, // Styles applied to the Popper component.
          popperInteractive: {}, // Styles applied to the Popper component unless disableInteractive={true}
          popperArrow: {}, // Styles applied to the Popper component if arrow={true}
          popperClose: {}, // Styles applied to the Popper component unless the tooltip is open
          tooltip: {
            ...theme.typography.caption,
            fontWeight: 600,
            color: HMTSwatch.White[100],
            backgroundColor: HMTSwatch.Grey[700],
            boxShadow: theme.shadows[1]
          }, // Styles applied to the tooltip (label wrapper) element
          tooltipArrow: {}, // Styles applied to the tooltip (label wrapper) element if arrow={true}
          touch: {}, // Styles applied to the tooltip (label wrapper) element if the tooltip is opened by touch
          tooltipPlacementLeft: {}, // Styles applied to the tooltip (label wrapper) element if placement contains "left"
          tooltipPlacementRight: {}, // Styles applied to the tooltip (label wrapper) element if placement contains "right"
          tooltipPlacementTop: {}, // Styles applied to the tooltip (label wrapper) element if placement contains "top"
          tooltipPlacementBottom: {} // Styles applied to the tooltip (label wrapper) element if placement contains "bottom"
        }
      },
      MuiTypography: {
        defaultProps: {},
        styleOverrides: {
          root: {}, // Styles applied to the root element if variant="root"
          body1: {}, // Styles applied to the root element if variant="body1"
          body2: {}, // Styles applied to the root element if variant="body2"
          caption: {}, // Styles applied to the root element if variant="caption"
          button: { ...theme.typography.body2 }, // Styles applied to the root element if variant="button"
          h1: {}, // Styles applied to the root element if variant="h1"
          h2: {}, // Styles applied to the root element if variant="h2"
          h3: {}, // Styles applied to the root element if variant="h3"
          h4: {}, // Styles applied to the root element if variant="h4"
          h5: {}, // Styles applied to the root element if variant="h5"
          h6: {}, // Styles applied to the root element if variant="h6"
          subtitle1: {}, // Styles applied to the root element if variant="subtitle1"
          subtitle2: {}, // Styles applied to the root element if variant="subtitle2"
          overline: {}, // Styles applied to the root element if variant="overline"
          noWrap: {}, // Styles applied to the root element if variant="noWrap"
          gutterBottom: {}, // Styles applied to the root element if variant="gutterBottom"
          paragraph: {} // Styles applied to the root element if variant="paragraph"
        }
      }
    }
  }
}
